import { Request, Response,NextFunction } from "express";
import { Movie } from "../controllers/moviesController.js";
import { moviesSchema } from "../schemas/moviesSchema.js";
export async function moviesValidate(req:Request, res:Response, next:NextFunction) {


    const validationStatus = moviesSchema.validate(req.body as Movie, { abortEarly: false });

    if (validationStatus.error) {
        const error = validationStatus.error.details.map((detail) => detail.message);
        res.status(400).send(error);
        return;
    };

    next();

}