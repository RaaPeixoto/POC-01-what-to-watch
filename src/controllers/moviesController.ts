import { Request, Response } from "express";
import { insertMovie, selectMovies } from "../repositories/moviesReposity";
export type Movie = {
    id?:string,
    title: string,
     image: string,
     iswatched?: boolean,
     stars: number,
    "plataformId"?: number,
    "genreId"?:  number,
    "createdAt"?: string | number
    plataform? :string,
    genre?:string
  }
  
export async function getMovies(req:Request,res:Response) {
    const {plataform,genre} = req.params;
    try{
          const movies = await selectMovies(plataform,genre);

          res.status(200).send(movies.rows);
    }catch(err){
        res.status(500).send(err);
    }
  

}


export async function postMovie(req:Request,res:Response) {
    const movie = req.body;
    try{
          await insertMovie(movie);

          res.sendStatus(201);
    }catch(err){
        res.status(500).send(err);
    }
  

}