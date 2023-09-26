from sqlite4.SQLite4 import SQLite4
import uuid
import concurrent.futures

def test_multithread_write():
    with concurrent.futures.ThreadPoolExecutor(max_workers=50) as executor:
        db_name = uuid.uuid4()
        db = SQLite4(f"{db_name}.db")

        db.connect()
        db.create_table("test", ["foo", "bar"])

        def insert():
            db.insert("test", {"foo": str(uuid.uuid4()), "bar": str(uuid.uuid4())})

        futures = [executor.submit(insert) for _ in range(50)]
        concurrent.futures.wait(futures)
