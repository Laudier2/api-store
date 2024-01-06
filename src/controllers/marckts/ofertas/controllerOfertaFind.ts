import { Request, Response } from "express";
import { prisma } from "../../../prisma_Client_Orm/prismaClient"; 

export class ControllerOfertasFind {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const OfertasFind = await prisma.ofertas.findMany({
      where: {
        id
      }
    })

    return response.status(200).json(OfertasFind)

  }
}
