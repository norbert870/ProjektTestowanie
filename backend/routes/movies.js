const express = require("express");
const db = require("../db");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", auth, (req, res) => {
  db.all(
    "SELECT * FROM movies WHERE owner = ?",
    [req.user.id],
    (err, rows) => {
      res.json(rows);
    }
  );
});

router.post("/", auth, (req, res) => {
  const { title, year, description } = req.body;

  const stmt = db.prepare(
    "INSERT INTO movies (title, year, description, owner) VALUES (?, ?, ?, ?)"
  );

  stmt.run(title, year, description, req.user.id, function () {
    res.json({
      id: this.lastID,
      title,
      year,
      description
    });
  });
});

router.delete("/:id", auth, (req, res) => {
  db.run(
    "DELETE FROM movies WHERE id = ? AND owner = ?",
    [req.params.id, req.user.id],
    function () {
      res.json({ msg: "Usunięto" });
    }
  );
});

module.exports = router;
