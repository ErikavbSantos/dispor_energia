import sqlite3
import queue
import threading
import logging


class Future:
    def __init__(self):
        self.result = None
        self.exception = None
        self.event = threading.Event()

    def put(self, result):
        self.result = result
        self.event.set()

    def put_exception(self, exception):
        self.exception = exception
        self.event.set()

    def wait(self):
        self.event.wait()

    def done(self):
        return self.event.is_set()


class SQLite4:
    _instances = {}

    def __new__(cls, db_name):
        if cls not in cls._instances:
            cls._instances[cls] = {}
        if db_name not in cls._instances[cls]:
            instance = super().__new__(cls)
            cls._instances[cls][db_name] = instance
        return cls._instances[cls][db_name]

    def __init__(self, db_name):
        self.db_name = db_name
        self.connection = None
        self.worker_event = threading.Event()
        self.operation_queue = queue.Queue()
        self.worker_thread = threading.Thread(
            target=self._execute_operations, daemon=True
        )

    def _execute_operations(self):
        while not self.worker_event.is_set():
            operation, future, args, kwargs = self.operation_queue.get()
            if operation is None:
                logging.debug("None type operation Skipping...")
                self.operation_queue.task_done()
                continue
            try:
                result = operation(*args, **kwargs)
                future.put(result)
            except Exception as e:
                future.put_exception(e)
            finally:
                self.operation_queue.task_done()

    def _queue_operation(self, operation, *args, **kwargs):
        future = Future()
        logging.debug("Sending operation to Queue")
        self.operation_queue.put((operation, future, args, kwargs))
        # Wait for the future operation to complete and retrieve the result
        logging.debug("Waiting for future to be done...")
        future.wait()
        if future.done():
            return future.result

    def connect(self, debug=False):
        if debug:
            logging.basicConfig(level=logging.DEBUG)
        logging.debug(f"Connecting to {self.db_name}")
        self.connection = sqlite3.connect(self.db_name, check_same_thread=False)
        logging.debug(f"Starting tasks thread related to {self.db_name}")
        self.worker_thread.start()

    def disconnect(self):
        if self.connection:
            logging.debug(f"Closing connection to {self.db_name}")
            self._queue_operation(self.connection.close)
            logging.debug(f"Terminating tasks thread related to {self.db_name}")
            self.worker_thread.join()
            self.worker_event.set()

    def create_table(self, table_name, columns):
        def create_table_query():
            with self.connection:
                cursor = self.connection.cursor()
                columns_str = ", ".join(columns)
                create_table_query = (
                    f"CREATE TABLE IF NOT EXISTS {table_name} ({columns_str})"
                )
                cursor.execute(create_table_query)

        return self._queue_operation(create_table_query)

    def execute(self, query):
        def execute_query():
            with self.connection:
                cursor = self.connection.cursor()
                cursor.execute(query)

        return self._queue_operation(execute_query)

    def insert(self, table_name, data):
        def insert_query():
            with self.connection:
                cursor = self.connection.cursor()
                columns_str = ", ".join(data.keys())
                placeholders = ", ".join(["?" for _ in data.keys()])
                insert_query = (
                    f"INSERT INTO {table_name} ({columns_str}) VALUES ({placeholders})"
                )
                cursor.execute(insert_query, tuple(data.values()))

        return self._queue_operation(insert_query)

    def update(self, table_name, data, condition):
        def update_query():
            with self.connection:
                cursor = self.connection.cursor()
                columns_str = ", ".join([f"{col} = ?" for col in data.keys()])
                update_query = (
                    f"UPDATE {table_name} SET {columns_str} WHERE {condition}"
                )
                cursor.execute(update_query, tuple(data.values()))

        return self._queue_operation(update_query)

    def delete(self, table_name, condition):
        def delete_query():
            with self.connection:
                cursor = self.connection.cursor()
                delete_query = f"DELETE FROM {table_name} WHERE {condition}"
                cursor.execute(delete_query)

        return self._queue_operation(delete_query)

    def select(self, table_name, columns=None, condition=None):
        def select_query():
            with self.connection:
                cursor = self.connection.cursor()
                columns_str = "*"
                if columns:
                    columns_str = ", ".join(columns)
                select_query = f"SELECT {columns_str} FROM {table_name}"
                if condition:
                    select_query += f" WHERE {condition}"
                cursor.execute(select_query)
                return cursor.fetchall()

        return self._queue_operation(select_query)
