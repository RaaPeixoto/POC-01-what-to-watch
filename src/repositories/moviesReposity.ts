
import { Movie, QueryMovies } from "../controllers/moviesController.js";
import client from "../database/db.js";
import { movies } from "@prisma/client";
type Movies ={
  id: number;
  image: string;
  plataform: {
      name: string;
  };
  genre: {
      name: string;
  };
  title: string;
  stars: number;
  description: string;
  iswatched: boolean;
}
export async function selectMovies(
  query: QueryMovies
)  : Promise<Movies[]>  {
  const { plataform, genre } = query;
  /*   localhost:5000/movies/?genre=teste&plataform=teste */
  if (!plataform && !genre) {
    return await client.movies.findMany({
      select: {
        id: true,
        title: true,
        image: true,
        description: true,
        iswatched: true,
        stars: true,
        genre: {
          select: {
            name: true,
          },
        },
        plataform: {
          select: {
            name: true,
          },
        },
      },
    });
  }
  if (plataform && genre) {
    return await client.movies.findMany({
      where: {
        genre: {
          name: {
            equals: genre,
            mode: "insensitive",
          },
        }, //como colocar esse name como lower case
        plataform: {
          name: { equals: plataform, mode: "insensitive" },
        },
      },
      select: {
        id: true,
        title: true,
        image: true,
        description: true,
        iswatched: true,
        stars: true,
        genre: {
          select: {
            name: true,
          },
        },
        plataform: {
          select: {
            name: true,
          },
        },
      },
    });
  }
  if (plataform) {
    return await client.movies.findMany({
      where: {
        plataform: {
          name: { equals: plataform, mode: "insensitive" },
        },
      },
      select: {
        id: true,
        title: true,
        image: true,
        description: true,
        iswatched: true,
        stars: true,
        genre: {
          select: {
            name: true,
          },
        },
        plataform: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  return await client.movies.findMany({
    where: {
      genre: {
        name: {
          equals: genre,
          mode: "insensitive",
        },
      }, //como colocar esse name como lower case
    },
    select: {
      id: true,
      title: true,
      image: true,
      description: true,
      iswatched: true,
      stars: true,
      genre: {
        select: {
          name: true,
        },
      },
      plataform: {
        select: {
          name: true,
        },
      },
    },
  });
}

export async function insertMovie(movie:Movie): Promise<movies>  { 

     return await client.movies.create({
      data:movie
     })   
}

export async function updateIsWatched(id:number): Promise<movies>   {
   return await client.movies.update({
    where: { id },
    data:{
      iswatched:true
    }
  })
}

export async function selectMovieById(id:number):Promise<Movies>  {
  return await client.movies.findFirst({
    where: {
     id:id
    },
    select: {
      id: true,
      title: true,
      image: true,
      description: true,
      iswatched: true,
      stars: true,
      genre: {
        select: {
          name: true,
        },
      },
      plataform: {
        select: {
          name: true,
        },
      },
    },
  });
}

export async function deleteMovieById(id:number) {
  await client.movies.delete({
  where:{id}
  })
}

export async function selectMovieByName(title:string): Promise<Movies>  {
  return await client.movies.findFirst({
    where: {
     title:{
      equals: title,
          mode: "insensitive",}
    },
    select: {
      id: true,
      title: true,
      image: true,
      description: true,
      iswatched: true,
      stars: true,
      genre: {
        select: {
          name: true,
        },
      },
      plataform: {
        select: {
          name: true,
        },
      },
    },
  });
}