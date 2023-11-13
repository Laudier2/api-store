import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class controllerproductsCategory {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const products = await prisma.products.findMany({
      where: {
        id: id
      },
      include: {
        product_category_relations: {
          include: {
            categories: true
          }
        }
      }
    });

    return response.json(products);
  }
}