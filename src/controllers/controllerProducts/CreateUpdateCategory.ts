import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class CreatecategoriesUpdate {
  async handle(request: Request, response: Response) {
    const { id, name, image } = request.body;

    const categories = await prisma.category.update({
      where: {
        id: id,
      },
      data: {
        name,
        image
      }
    });

    return response.json(categories);
  }
}
