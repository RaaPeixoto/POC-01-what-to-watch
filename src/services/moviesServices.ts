import { selectMovieById, selectMovieByName } from "../repositories/moviesReposity.js";

export async function isMovieExists(title:string):Promise<boolean>{
    const isMovieExists = await selectMovieByName(title);
    if (isMovieExists.rows.length>0){
        return true
    }
    return false
}

export async function isMovieExistsById(id:string):Promise<boolean>{
    const isMovieExists = await selectMovieById(id);
 
    if (isMovieExists.rows.length===0){
        return false
    }
    return true
}