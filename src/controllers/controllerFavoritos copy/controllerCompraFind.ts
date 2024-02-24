import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient"; 

export class ControllerFavoritoFind {
  async handle(request: Request, response: Response) {

    const comentario = await prisma.favorito.findFirst({})

    return response.status(200).json(comentario)

  }
}
