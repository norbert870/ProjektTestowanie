import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const openDb = async () => {
  return open({
    filename: "./movies.db",
    driver: sqlite3.Database
  });
};

// inicjalizacja tabeli
export const initDb = async () => {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS movies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL
    )
  `);
  return db;
};
