import { QueryResult } from "pg";
import { Genres } from "../controllers/genresController.js";
import connection from "../database/db.js";

export async function selectGenres():Promise<QueryResult<Genres[]>>{
    return connection.query(
      `SELECT * FROM genres;`);
    
}