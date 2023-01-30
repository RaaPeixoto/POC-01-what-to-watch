import { genres } from "@prisma/client";
import client from "../database/db.js";


export async function selectGenres(): Promise<genres[]>{
  return await client.genres.findMany()
    
}