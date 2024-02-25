import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class ControllerComentario {
  async handle(request: Request, response: Response) {
    const { 
      name, 
      imgName,
      image, 
      message,
      estrela,
      idProduct
    } = request.body;
    
    if(
      typeof name === 'number' || 
      typeof image === 'number' || 
      typeof message === 'number' ||
      typeof imgName === 'number' || 
      typeof idProduct === 'number' || 
      typeof estrela === 'number' 
    ){
      return response.status(501).json({
        msg: `Lembre-se que, todos os campos tem que estar em string ok!`
      })
    }  

    if(
        typeof name === 'undefined' || 
        typeof image === 'undefined' ||
        typeof message === 'undefined' ||
        typeof imgName === 'undefined' ||
        typeof idProduct === 'undefined' ||
        typeof estrela === 'undefined' 
    ){
      return response.status(500).json({
        msg: `Algum campo esta faltando!`
      })
    }   

    const comentario = await prisma.comentarios.create({
      data: {
        name, 
        imgName,
        image, 
        message,
        estrela,
        idProduct
      }
    })
    
    return response.status(201).json({ message: 'Comentarios criada com sucesso', comentario})
  }
}
