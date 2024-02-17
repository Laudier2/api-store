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

export class ControllerCompraFind1 {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const compra1 = await prisma.compra1.findMany({})

    return response.status(200).json(compra1)

  }
}
export class ControllerCompraFind2 {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const compra2 = await prisma.compra2.findMany({})

    return response.status(200).json(compra2)

  }
}
export class ControllerCompraFind3 {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const compra3 = await prisma.compra3.findMany({})

    return response.status(200).json(compra3)

  }
}
export class ControllerCompraFind4 {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const compra4 = await prisma.compra4.findMany({})

    return response.status(200).json(compra4)

  }
}
