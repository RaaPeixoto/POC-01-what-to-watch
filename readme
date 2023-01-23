# What to Watch

Application to manage the movies you want to watch



## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database use the dump file to cpopulate it
4. Configure the `.env.development` file using the `.env.example` file 

5. Run the back-end in a development environment:

```bash
npm run dev
```



## Routes

### ◉ Get Movies 

Get all movies: GET "/movies"

Get movies filtering platform and/or genre: GET "/movies/?genre=`genreName`&plataform=`plataformName`"

Reponse:
```bash
[
  {
    "id": 1,
    "title": "Avatar 2",
    "image": "http://...",
    "description": "movie description",
    "iswatched": false,
    "stars": 4,
    "genre": "Science fiction",
    "plataform": "Netflix"
  }
]
```
### ◉ Post Movie 

 POST "/movies"

Body:
```bash
[
  {
    "id": 1,
    "title": "Avatar 2",
    "image": "http://...",
    "description": "movie description",
    "genre": 1,
    "plataform": 2
  }
]
```

### ◉ Delete Movie

DELETE "/movies/`movieId`"



### ◉ Update Watched Movie

PUT "/movies/watched/`movieId`"

### ◉ Get Genres

GET "/genres"

Reponse:
```bash
[
  {
    "id": 1,
    "name": "teste"
  }
]
```

### ◉ Get Plataforms

GET "/plataforms"

Reponse:
```bash
[
  {
    "id": 1,
    "name": "teste",
    "image" : "http://"
  }
]
```