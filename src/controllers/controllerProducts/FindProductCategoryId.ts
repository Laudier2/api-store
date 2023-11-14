import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class controllerproductsCategory {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const products = await prisma.product.findMany({
      where: {
        id: id
      },
      include: {
        products_categories: {
          include: {
            categories: true
          }
        }
      }
    });

    return response.json(products);
  }
}