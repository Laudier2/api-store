import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class FindcategoriesController {
  async handle(request: Request, response: Response) {

    const categories = await prisma.categories.findMany({})

    return response.status(200).json(categories);
  }
}
