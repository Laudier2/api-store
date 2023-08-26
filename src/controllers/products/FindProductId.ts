import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class FindProductController {
  async handle(request: Request, response: Response) {

    const product = await prisma.product.findMany({});

    return response.json(product);
  }
}

export class controllerProductId {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const userExists = await prisma.product.findUnique({
      where: {
        id: id
      }
    })

    if (!userExists) {
      return response.status(400).json({
        msg: `Esse id: ${id} não estar vinculado a nem uma produto, tente outro!`
      })
    }

    const Product = await prisma.product.findUnique({
      where: {
        id: id
      },
      include: {
        product_category: {
          include: {
            categories: true
          }
        }
      }
    });

    return response.status(200).json(Product);
  }
}