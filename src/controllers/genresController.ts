import { Request, Response } from "express";
import httpStatus from "http-status";
import { selectGenres } from "../repositories/genresRepository.js";
export type Genres = {id:number,name:string}
export async function getGenres(req:Request,res:Response) {
 


    try{
          const genres = await selectGenres();

          res.status(httpStatus.OK).send(genres.rows);
    }catch(err){
        res.sendStatus(httpStatus.NO_CONTENT);
    }
  

}