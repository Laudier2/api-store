import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const category = await prisma.category.create({
      data: {
        name,
      },
    });

    return response.json(category);
  }
}
