import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient"; 

//Novas itidade adicionada
export class ControllerComentarioUpdate {
  async handle(request: Request, response: Response) {
    const { 
      id,
      name, 
      image, 
      message,
      imgName,
      estrela,
      idProduct
    } = request.body;
    
    if(
      typeof name === 'number' || 
      typeof imgName === 'number' || 
      typeof image === 'number' || 
      typeof estrela === 'number' || 
      typeof idProduct === 'number' || 
      typeof message === 'number' 
    ){
      return response.status(501).json({
        msg: `Lembre-se que, todos os campos tem que estar em string ok!`
      })
    }  

    if(
        typeof name === 'undefined' || 
        typeof imgName === 'undefined' ||
        typeof image === 'undefined' ||
        typeof estrela === 'undefined' ||
        typeof idProduct === 'undefined' ||
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
        imgName,
        estrela,
        idProduct,
        message
      }
    })
    
    return response.status(201).json(comentarioUpdate)
  }
}
