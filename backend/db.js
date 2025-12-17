const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./movies.db");

// Tworzenie tabel jeśli nie istnieją
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      password TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS movies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      year INTEGER,
      description TEXT,
      owner INTEGER,
      FOREIGN KEY (owner) REFERENCES users(id)
    )
  `);
});

module.exports = db;
