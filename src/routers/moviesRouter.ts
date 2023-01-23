import { Router } from "express";
import { deleteMovie, getMovies, postMovie, updateWatchedMovie } from "../controllers/moviesController.js";
import { moviesValidate } from "../middlewares/moviesValidate.js";


const router = Router();

router.get("/movies/",getMovies);
router.post("/movies",moviesValidate,postMovie);
router.put("/movies/watched/:id",updateWatchedMovie);
router.delete("/movies/:id",deleteMovie);
export default router;