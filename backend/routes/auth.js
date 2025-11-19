const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db");

const router = express.Router();

router.post("/register", (req, res) => {
  const { email, password } = req.body;

  const hashed = bcrypt.hashSync(password, 10);

  const stmt = db.prepare("INSERT INTO users (email, password) VALUES (?, ?)");

  stmt.run(email, hashed, function (err) {
    if (err) return res.status(400).json({ msg: "Email już istnieje" });
    res.json({ id: this.lastID, email });
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.get("SELECT * FROM users WHERE email = ?", [email], (err, user) => {
    if (!user) return res.status(404).json({ msg: "Nie znaleziono użytkownika" });

    const ok = bcrypt.compareSync(password, user.password);
    if (!ok) return res.status(400).json({ msg: "Złe hasło" });

    const token = jwt.sign({ id: user.id }, "SECRET_KEY");

    res.json({ token });
  });
});

module.exports = router;
