import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class FindcategoriesController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const categories = await prisma.category.findMany({
      where: {
        name: name,
      },
      include: {
        products_categories: {
          include: {
            products: true
          }
        }
      }
    })

    return response.status(200).json(categories);
  }
}
