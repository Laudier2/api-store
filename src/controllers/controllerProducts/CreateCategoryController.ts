import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class CreatecategoriesController {
  async handle(request: Request, response: Response) {
    const { name, image } = request.body;

    const categories = await prisma.category.create({
      data: {
        name,
        image
      },
    });

    return response.json(categories);
  }
}
