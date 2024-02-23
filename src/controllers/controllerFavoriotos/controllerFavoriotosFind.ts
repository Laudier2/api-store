import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient"; 

export class ControllerFavoritFind {
  async handle(request: Request, response: Response) {

    const user = await prisma.favorito.findMany({})

    return response.status(200).json(user)

  }
}
