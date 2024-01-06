import { Request, Response } from "express";
import { prisma } from "../../../prisma_Client_Orm/prismaClient";

export class ControllerBanner {
  async handle(request: Request, response: Response) {
    const { bannes } = request.body;
    
    if(
      typeof bannes === 'number'
    ){
      return response.status(501).json({
        msg: `Lembre-se que, todos os campos tem que estar em string ok!`
      })
    }  

    if(
        
        typeof bannes === 'undefined'
    ){
      return response.status(500).json({
        msg: `Algum campo esta faltando!`
      })
    }   

    const BannesCreate = await prisma.bannes.create({
      data: {       
        bannes, 
      }
    })
    
    return response.status(201).json({ message: 'Compra criada com sucesso', BannesCreate})
  }
}
