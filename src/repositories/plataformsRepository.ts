import { QueryResult } from "pg";
import { Plataforms } from "../controllers/plataformsController.js";
import connection from "../database/db.js";

export async function selectPlataforms():Promise<QueryResult<Plataforms>>{
    return connection.query(
      `SELECT * FROM plataforms;`);
    
}