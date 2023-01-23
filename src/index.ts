import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import moviesRouter from "./routers/moviesRouter.js";
import plaformsRouter from "./routers/plataformsRouter.js";
import genresRouter from "./routers/genresRouter.js";



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

 app.use(moviesRouter); 
 app.use(plaformsRouter);
 app.use(genresRouter)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App running on port: ${port}`));