import { Request, Response } from "express";
import { prisma } from "../../../prisma_Client_Orm/prismaClient";

export class ControllerPromocao {
  async handle(request: Request, response: Response) {
    const { promocao } = request.body;
    
    if(
      typeof promocao === 'number'
    ){
      return response.status(501).json({
        msg: `Lembre-se que, todos os campos tem que estar em string ok!`
      })
    }  

    if(
        
        typeof promocao === 'undefined'
    ){
      return response.status(500).json({
        msg: `Algum campo esta faltando!`
      })
    }   

    const PromocaoCreate = await prisma.promocao.create({
      data: {       
        promocao, 
      }
    })
    
    return response.status(201).json({ message: 'Compra criada com sucesso', PromocaoCreate})
  }
}
