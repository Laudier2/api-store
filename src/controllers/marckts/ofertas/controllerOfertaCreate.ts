import { Request, Response } from "express";
import { prisma } from "../../../prisma_Client_Orm/prismaClient";

//Class de Ofetas
export class ControllerOfertas {
  async handle(request: Request, response: Response) {
    const { ofertas } = request.body;
    
    if(
      typeof ofertas === 'number'
    ){
      return response.status(501).json({
        msg: `Lembre-se que, todos os campos tem que estar em string ok!`
      })
    }  

    if(
        
        typeof ofertas === 'undefined'
    ){
      return response.status(500).json({
        msg: `Algum campo esta faltando!`
      })
    }   

    const OfertasCreate = await prisma.ofertas.create({
      data: {       
        ofertas, 
      }
    })
    
    return response.status(201).json({ message: 'Compra criada com sucesso', OfertasCreate})
  }
}
