from sqlite4.SQLite4 import SQLite4
import uuid

def test_crud():
    db_name = uuid.uuid4()
    db = SQLite4(f"{db_name}.db")

    db.connect()

    db.create_table("test", ["foo", "bar"])

    db.insert("test", {"foo": "foo", "bar": "bar"})
    result = db.select("test")

    # Check create, insert and fetch are working
    assert result == [("foo", "bar")]

    db.update("test", {"foo": "fooo", "bar": "baar"}, "1 = 1")
    result = db.select("test")

    # Check update is working
    assert result == [("fooo", "baar")]

    db.delete("test", "1 == 1")
    result = db.select("test")

    # Check delete is working
    assert result == []