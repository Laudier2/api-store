import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient"; 

export class ControllerComentarioFind {
  async handle(request: Request, response: Response) {

    const user = await prisma.comentarios.findMany({})

    return response.status(200).json(user)

  }
}
