import { Router } from "express";
import { getGenres } from "../controllers/genresController.js";




const genresRouter = Router();

genresRouter.get("/genres",getGenres);

export default genresRouter;