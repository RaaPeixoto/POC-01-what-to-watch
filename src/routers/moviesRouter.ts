import { Router } from "express";
import {  deleteMovie,  getMovies, postMovie,  updateWatchedMovie } from "../controllers/moviesController.js";
import { moviesValidate } from "../middlewares/moviesValidate.js";


const moviesRouter = Router();

moviesRouter.get("/movies/",getMovies);
 moviesRouter.post("/movies",moviesValidate,postMovie);
 moviesRouter.put("/movies/watched/:id",updateWatchedMovie);
moviesRouter.delete("/movies/:id",deleteMovie);  
export default moviesRouter;