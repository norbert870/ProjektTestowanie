const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/auth"));
app.use("/movies", require("./routes/movies"));

app.listen(5000, () => console.log("Backend działa na porcie 5000"));
