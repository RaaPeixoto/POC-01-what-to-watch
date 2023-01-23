import { Router } from "express";
import { getPlataforms } from "../controllers/plataformsController.js";



const plaformsRouter = Router();

plaformsRouter.get("/plataforms",getPlataforms);

export default plaformsRouter;