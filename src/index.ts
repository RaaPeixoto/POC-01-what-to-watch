import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routers/moviesRouter";



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

 app.use(router); 

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App running on port: ${port}`));