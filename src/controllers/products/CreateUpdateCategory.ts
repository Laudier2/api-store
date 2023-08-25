import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class CreateCategoryUpdate {
  async handle(request: Request, response: Response) {
    const { id, name } = request.body;

    const category = await prisma.category.update({
      where: {
        id: id,
      },
      data: {
        name
      }
    });

    return response.json(category);
  }
}
