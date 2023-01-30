import { Request, Response } from "express";
import httpStatus from "http-status";
import { selectPlataforms } from "../repositories/plataformsRepository.js";
export type Plataforms = {id:number,name:string,image:string}[]
export async function getPlataforms(req:Request,res:Response) {

    try{
          const plataforms = await selectPlataforms();

          res.status(httpStatus.OK).send(plataforms);
    }catch(err){
        res.sendStatus(httpStatus.NO_CONTENT);
    }
  

}