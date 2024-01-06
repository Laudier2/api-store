import { Request, Response } from "express";
import { prisma } from "../../../prisma_Client_Orm/prismaClient";

export class ControllerSlids {
  async handle(request: Request, response: Response) {
    const { slids } = request.body;
    
    if(
      typeof slids === 'number'
    ){
      return response.status(501).json({
        msg: `Lembre-se que, todos os campos tem que estar em string ok!`
      })
    }  

    if(
        
        typeof slids === 'undefined'
    ){
      return response.status(500).json({
        msg: `Algum campo esta faltando!`
      })
    }   

    const SlidsCreate = await prisma.slids.create({
      data: {       
        slids, 
      }
    })
    
    return response.status(201).json({ message: 'Compra criada com sucesso', SlidsCreate})
  }
}
