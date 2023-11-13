import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";
import { v4 as uuidv4 } from 'uuid';

const uuId = uuidv4()


export class FindproductsController {
  async handle(request: Request, response: Response) {

    const products = await prisma.products.findMany({});

    return response.json(products);
  }
}

export class controllerproductsId {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const userExists = await prisma.products.findUnique({
      where: {
        id: id
      }
    })

    if (!userExists) {
      return response.status(400).json({
        msg: `Esse id: ${id} não estar vinculado a nem uma produto, tente outro!`
      })
    }

    const products = await prisma.products.findUnique({
      where: {
        id: id
      },
      include: {
        product_category_relations: {
          include: {
            categories: true
          }
        }
      }
    });
    console.log({test: uuId})

    return response.status(200).json(products);
  }
}