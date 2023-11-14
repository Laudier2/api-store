import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class CreatecategoriesController {
  async handle(request: Request, response: Response) {
    const { name, id } = request.body;

    const categories = await prisma.category.create({
      data: {
        id,
        name,
      },
    });

    return response.json(categories);
  }
}
