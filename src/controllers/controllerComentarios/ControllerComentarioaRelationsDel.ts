import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class ControllerComentarioaRelationsDel {
  async handle(request: Request, response: Response) {
    const id = request.params.id;

    const idExists = await prisma.comentarioRealations.findUnique({
      where: {
        id: id
      }
    })

    if(!idExists){
      return response.status(400).json({
        msg: `Esse id: ${id} não existe mais no database`
      })
    }  

    const comentarioRealatioDell = await prisma.comentarioRealations.delete({     
        where: {
          id: id
        },
        include: {
          product: true
        }
      })

    return response.json({msg: "Compra deletado com sucesso!", comentarioRealatioDell});
  }
}

