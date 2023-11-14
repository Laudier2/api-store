import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class CreatecategoriesUpdate {
  async handle(request: Request, response: Response) {
    const { id, name } = request.body;

    const categories = await prisma.category.update({
      where: {
        id: id,
      },
      data: {
        name
      }
    });

    return response.json(categories);
  }
}
