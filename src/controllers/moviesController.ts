import { Request, Response } from "express";
import httpStatus from "http-status";

import { deleteMovieById, insertMovie, selectMovies, updateIsWatched } from "../repositories/moviesReposity.js";
import { isMovieExists, isMovieExistsById } from "../services/moviesServices.js";
export type Movie = {
    id?:string,
    title: string,
     image: string,
     iswatched?: boolean,
     stars: number,
     description: string,
    "plataformId"?: number,
    "genreId"?:  number,
    "createdAt"?: string | number |Date
    plataform? :string,
    genre?:string
  }
export type QueryMovies = {
    plataform?:string,
    genre?:string
}

export async function getMovies(req:Request,res:Response) {
 
    const query = req.query as QueryMovies;

    try{
          const movies = await selectMovies(query);

          res.status(httpStatus.OK).send(movies.rows);
    }catch(err){
        res.sendStatus(httpStatus.NO_CONTENT);
    }
  

}


export async function postMovie(req:Request,res:Response) {
    const movie = req.body as Movie;
    const isMovieAlreadyExists = await isMovieExists(movie.title)
    if(isMovieAlreadyExists){
        return res.sendStatus(httpStatus.CONFLICT);
    }
    try{
         await insertMovie(movie);
            
          res.sendStatus(httpStatus.CREATED);
    }catch(err){    
        console.log(err)
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
  

}

export async function updateWatchedMovie (req:Request,res:Response){
    const {id}= req.params;
    try{
        await updateIsWatched(id);

        res.sendStatus(httpStatus.CREATED);
  }catch(err){
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}


export async function deleteMovie (req:Request,res:Response){
    const {id}= req.params;
    const isMovieExists = await isMovieExistsById(id);
    if(!isMovieExists){
        return res.status(httpStatus.BAD_REQUEST).send("This movie not exists");
    }
    try{
        await deleteMovieById(id)

        res.sendStatus(httpStatus.OK);
  }catch(err){
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}