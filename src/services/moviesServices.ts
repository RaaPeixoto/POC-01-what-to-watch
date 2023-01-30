import { selectMovieById, selectMovieByName } from "../repositories/moviesReposity.js";


export async function isMovieExists(title:string):Promise<boolean>{
    const isMovieExists = await selectMovieByName(title);
    if (isMovieExists){
        return true
    }
    return false
}

export async function isMovieExistsById(id:number):Promise<boolean>{
    const isMovieExists = await selectMovieById(id);
 
    if (!isMovieExists){
        return false
    }
    return true
}