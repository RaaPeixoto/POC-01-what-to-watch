import { Router } from "express";
import { getMovies, postMovie } from "../controllers/moviesController";

const router = Router();

router.get("/movies/:plataform?/:genre?",getMovies);
router.post("/movies",postMovie);
export default router;