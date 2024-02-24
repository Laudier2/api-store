import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient"; 

export class controllerComentarioFindRelation {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const comentarioRealatio = await prisma.comentarioRealations.findMany({
      where: {
        id
      },
      include: {
        comentarios: true,
        product: true
      }
    })

    return response.status(200).json(comentarioRealatio)

  }
}
