import connection from "../database/db.js";
import { Movie, QueryMovies } from "../controllers/moviesController.js";
import { QueryResult } from "pg";

export async function selectMovies(query:QueryMovies):Promise<QueryResult<Movie>>{
      const {plataform,genre} = query
    /*   localhost:5000/movies/?genre=teste&plataform=teste */
    if (!plataform && !genre){
        
        return connection.query(
            `SELECT movies.id, movies.title, movies.image,movies.description, movies."iswatched", movies.stars, genres.name AS "genre", plataforms.name AS "plataform" 
            FROM movies 
            JOIN "genres"
            ON movies."genreId" = genres.id
            JOIN "plataforms"
            ON movies."plataformId" = plataforms.id
            ORDER BY movies."createdAt" DESC
            ;`);
      }
      if (plataform && genre){
        return connection.query(
            `SELECT movies.id, movies.title, movies.image,movies.description, movies."iswatched", movies.stars, genres.name AS "genre", plataforms.name AS "plataform" 
            FROM movies 
            JOIN "genres"
            ON movies."genreId" = genres.id
            JOIN "plataforms"
            ON movies."plataformId" = plataforms.id
            WHERE plataforms.name = $1  AND genres.name =$2
            ORDER BY movies."createdAt" DESC
            ;`,[plataform,genre]);

      }
      if(plataform){
        return connection.query(
            `SELECT  movies.id,movies.title, movies.image,movies.description, movies."iswatched", movies.stars, genres.name AS "genre", plataforms.name AS "plataform" 
            FROM plataforms
            JOIN "movies"
            ON movies."plataformId" = plataforms.id
            JOIN "genres"
            ON movies."genreId" = genres.id
            WHERE plataforms.name = $1 
            ORDER BY movies."createdAt" DESC
            ;`,[plataform]);
      }
      
      return connection.query(
        `SELECT movies.id, movies.title, movies.image,movies.description, movies."iswatched", movies.stars, genres.name AS "genre", plataforms.name AS "plataform" 
        FROM genres
        JOIN "movies"
        ON movies."genreId" = genres.id
        JOIN "plataforms"
        ON movies."plataformId" = plataforms.id
        WHERE  genres.name =$1
        ORDER BY movies."createdAt" DESC
        ;`,[genre]);
      

    
 
}

export async function insertMovie(movie:Movie){ 
   
        const{title,image,stars,plataformId,genreId,description} = movie
        
     return connection.query(
        `INSERT INTO movies (title,image,stars,"plataformId","genreId",description) VALUES ($1, $2,$3,$4,$5,$6);`,
        [title,image,stars,plataformId,genreId,description]
      );
}

export async function updateIsWatched(id:string) {
   return connection.query(
        `
        UPDATE movies
        SET iswatched = true
        WHERE id = $1;
      `,
        [id]
      );
}

export async function selectMovieByName(title:string): Promise<QueryResult<Movie>>{
  return connection.query(
    `SELECT movies.id, movies.title, movies.image,movies.description, movies."iswatched", movies.stars, genres.name AS "genre", plataforms.name AS "plataform" 
    FROM genres
    JOIN "movies"
    ON movies."genreId" = genres.id
    JOIN "plataforms"
    ON movies."plataformId" = plataforms.id
    WHERE  movies.title =$1
    ORDER BY movies."createdAt" DESC
    ;`,[title]);
}
export async function selectMovieById(id:string): Promise<QueryResult<Movie>>{
  return connection.query(
    `SELECT movies.id, movies.title, movies.image,movies.description, movies."iswatched", movies.stars, genres.name AS "genre", plataforms.name AS "plataform" 
    FROM genres
    JOIN "movies"
    ON movies."genreId" = genres.id
    JOIN "plataforms"
    ON movies."plataformId" = plataforms.id
    WHERE  movies.id =$1
    ORDER BY movies."createdAt" DESC
    ;`,[id]);
}

export async function deleteMovieById(id:string) {
  return connection.query(
       `
       DELETE FROM movies
       WHERE id = $1;
     `,
       [id]
     );
}