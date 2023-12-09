import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class FindcategoriesControllerId {
  async handle(request: Request, response: Response) {
    const id = request.params.id;

      const idExists = await prisma.category.findUnique({
          where: {
              id: id
          }
      })

      if (!idExists) {
          console.log(`Esse id: ${id} não existe mais no database`)
      }

    const categories = await prisma.category.findMany({
      where: {
        id: id,
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
