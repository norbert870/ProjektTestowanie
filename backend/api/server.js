import express from "express";
import cors from "cors";
import movieRoutes from "./routes/movies.js";
import { initDb } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

// inicjalizacja bazy danych
await initDb();

// routing
app.use("/api/movies", movieRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
