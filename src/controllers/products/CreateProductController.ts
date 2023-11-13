import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const {
      name,
      price,
      bar_code,
      size,
      color,
      description,
      image,
      quantity,
      slug
    } = request.body;


    //const createProductCase = new Createproducts()

    const result = await prisma.products.create({
      data: {
        name,
        price,
        bar_code,
        size,
        color,
        description,
        image,
        quantity,
        slug
      }
    })

    return response.status(200).json(result);
  }
}
