import { Request, Response } from "express";
import { prisma } from "../../../prisma_Client_Orm/prismaClient"; 

export class ControllerSlidsUpdate {
  async handle(request: Request, response: Response) {
    const { 
      id,
      slids
    } = request.body;


    if(typeof id === "undefined"){
      return response.status(400).json({
        msg: `O id: ${id === undefined ? "Você não inserio nem um id!" : id} não existe, ou não esta vinculado a nem um usuário, tente outro!`
      })
    } 

    const SlidsUpdate = await prisma.slids.update({
      where: {
        id: id,
      },
      data: {
        slids
      }
    })
    
    return response.status(201).json(SlidsUpdate)
  }
}
