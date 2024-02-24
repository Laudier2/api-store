import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient"; 

export class ControllerComentarioFind {
  async handle(request: Request, response: Response) {
    const id = request.body;

    const user = await prisma.comentarios.findMany({
      where: {
        id: id
      },
      include: {
        comentariorealations: {
          include: {
            product: true
          }
        }
      }
    })

    return response.status(200).json(user)

  }
}
