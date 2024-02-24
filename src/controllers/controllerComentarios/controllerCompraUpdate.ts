import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient"; 

export class ControllerComentarioUpdate {
  async handle(request: Request, response: Response) {
    const { 
      id,
      name, 
      image, 
      message
    } = request.body;
    
    if(
      typeof name === 'number' || 
      typeof image === 'number' || 
      typeof message === 'number' 
    ){
      return response.status(501).json({
        msg: `Lembre-se que, todos os campos tem que estar em string ok!`
      })
    }  

    if(
        typeof name === 'undefined' || 
        typeof image === 'undefined' ||
        typeof message === 'undefined' 
    ){
      return response.status(500).json({
        msg: `Algum campo esta faltando!`
      })
    }   
    const comentarioUpdate = await prisma.comentarios.update({
      where: {
        id: id,
      },
      data: {
        name,
        image,
        message
      }
    })
    
    return response.status(201).json(comentarioUpdate)
  }
}