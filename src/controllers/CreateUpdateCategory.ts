import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateCategoryUpdate {
  async handle(request: Request, response: Response) {
    const { id, name } = request.body;

    const category = await prismaClient.category.update({
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
