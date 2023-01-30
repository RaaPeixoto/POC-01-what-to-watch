import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
 
await createGenres();

await createPlataforms();

await createMovies();

}
async function createPlataforms(){
    const plataforms = [
        { id: 1, name: "NetFflix", image: "https://" },
        { id: 2, name: "HBO Max", image: "https://" },
        { id: 3, name: "Prime Video", image: "https://" },
        { id: 4, name: "Disney +", image: "https://" },
        { id: 5, name: "Star+", image: "https://" },
        { id: 6, name: "Globoplay", image: "https://" },
      ];
     
    
   await  Promise.all(plataforms.map(
        (plataform) =>
           prisma.plataforms.create({
            data: plataform,
          })
      ));
}
async function createGenres() {
    const genres = [
        { id: 1, name: "Terror" },
        { id: 2, name: "Suspense" },
        { id: 3, name: "Comédia" },
        { id: 4, name: "Ficção Científica" },
        { id: 5, name: "Animação" },
        { id: 6, name: "Romance" },
        { id: 7, name: "Drama" },
      ];
   await Promise.all(genres.map(
        (genre) =>
          prisma.genres.create({
            data: genre,
          })
      )) ;
}
async function createMovies(){
    const movies = [
        {
         id:1,
          title: "Um Lugar silencioso ",
          image: "https://",
          stars: 4,
          description: "string",
        plataformId: 2,
          genreId: 5,
        },
        {
        id:2,
          title: "Um Lugar silencioso 2",
          image: "https://",
          stars: 3,
          description: "string",
          plataformId: 4,
          genreId: 3,
        },
        {
            id:3,
          title: "Avatar",
          image: "https://",
          stars: 5,
          description: "string",
          plataformId: 1,
          genreId: 3,
        },
        {
            id:4,
          title: "O gato de Botas",
          image: "https://",
          stars: 4,
          description: "string",
          plataformId: 3,
          genreId: 2,
        },
      ];
   await Promise.all(movies.map(
        (movie) =>
           prisma.movies.create({
            data: movie,
          })
      ));
}

main()
  .then(() => {
    console.log("Registros feitos com sucesso!");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
