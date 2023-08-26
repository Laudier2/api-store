import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class controllerProductCategory {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const Product = await prisma.product.findMany({
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

    return response.json(Product);
  }
}