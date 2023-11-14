import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient"; 

export class ControllerCompraFind {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const user = await prisma.compra.findMany({
      where: {
        id
      },
      include: {
        comprarealations: {
          include: {
            product: true
          }

        }
      }
    })

    return response.status(200).json(user)

  }
}
