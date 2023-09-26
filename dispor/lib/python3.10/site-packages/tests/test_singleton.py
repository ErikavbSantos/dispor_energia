from sqlite4.SQLite4 import SQLite4
import uuid

def test_singleton():
    db_name_1 = uuid.uuid4()
    db_name_2 = uuid.uuid4()

    db = SQLite4(f"{db_name_1}.db")
    db2 = SQLite4(f"{db_name_1}.db")
    db3 = SQLite4(f"{db_name_2}.db")

    # Check singleton
    assert db is db2
    assert db is not db3