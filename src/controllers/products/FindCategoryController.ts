import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class FindCategoryController {
  async handle(request: Request, response: Response) {

    const category = await prisma.category.findMany({})

    return response.status(200).json(category);
  }
}
