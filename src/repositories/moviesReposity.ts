import connection from "../database/db";
import { QueryResult } from "pg";
import { Movie } from "../controllers/moviesController";

export async function selectMovies(plataform:string,genre:string):Promise<QueryResult<Movie>>{
        
    if (!plataform && !genre){
        
        return connection.query(
            `SELECT  movies.title, movies.image, movies."iswatched", movies.stars, genres.name AS "genre", plataforms.name AS "plataform" 
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
            `SELECT  movies.title, movies.image, movies."iswatched", movies.stars, genres.name AS "genre", plataforms.name AS "plataform" 
            FROM movies 
            JOIN "genres"
            ON movies."genreId" = genres.id
            JOIN "plataforms"
            ON movies."plataformId" = plataforms.id
            WHERE movies."plataformId" = $1 AND movies."genreId" = $2
            ORDER BY movies."createdAt" DESC
            ;`,[plataform,genre]);

      }
      if(plataform){
        return connection.query(
            `SELECT  movies.title, movies.image, movies."iswatched", movies.stars, genres.name AS "genre", plataforms.name AS "plataform" 
            FROM movies 
            JOIN "genres"
            ON movies."genreId" = genres.id
            JOIN "plataforms"
            ON movies."plataformId" = plataforms.id
            WHERE movies."plataformId" = $1 
            ORDER BY movies."createdAt" DESC
            ;`,[plataform]);
      }
      
        return connection.query(
            `SELECT  movies.title, movies.image, movies."iswatched", movies.stars, genres.name AS "genre", plataforms.name AS "plataform" 
            FROM movies 
            JOIN "genres"
            ON movies."genreId" = genres.id
            JOIN "plataforms"
            ON movies."plataformId" = plataforms.id
            WHERE  movies."genreId" = $1
            ORDER BY movies."createdAt" DESC
            ;`,[genre]);
      

    
 
}

export async function insertMovie(movie:Movie){ 
        const{title,image,stars,plataformId,genreId} = movie
    return connection.query(
        `INSERT INTO movies (title,image,stars,"plataformId","genreId") VALUES ($1, $2,$3,$4,$5)`,
        [title,image,stars,plataformId,genreId]
      );
}

/* return connection.query(
    `SELECT  movies.title, movies.image, movies."iswatched", movies.stars, genres.name AS "genre", plataforms.name AS "plataform" 
    FROM genres
    JOIN "movies"
    ON movies."genreId" = genres.id
    JOIN "plataforms"
    ON movies."plataformId" = plataforms.id
    WHERE  genres.name ='teste'
    ORDER BY movies."createdAt" DESC
    ;`,[genre]); */