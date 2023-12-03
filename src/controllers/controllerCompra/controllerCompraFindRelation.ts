import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient"; 

export class ControllerCompraFindRelations {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const compraRelations = await prisma.compraRealations.findMany({})

    return response.status(200).json(compraRelations)

  }
}
