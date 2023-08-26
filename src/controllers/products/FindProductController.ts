import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class FindProductController {
  async handle(request: Request, response: Response) {

    const product = await prisma.product.findMany({});

    return response.json(product);
  }
}
