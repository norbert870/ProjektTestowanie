import express from "express";
import { getMovies, addMovie, deleteMovie } from "../controllers/movieController.js";

const router = express.Router();

router.get("/", getMovies);
router.post("/", addMovie);
router.delete("/:id", deleteMovie);

export default router;
