import { plataforms } from "@prisma/client";
import client from "../database/db.js";

export async function selectPlataforms(): Promise<plataforms[]>{
  return await client.plataforms.findMany()
    
}




