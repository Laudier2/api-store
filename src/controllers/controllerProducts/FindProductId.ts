import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";
import { v4 as uuidv4 } from 'uuid';

const uuId = uuidv4()


export class FindproductsController {
  async handle(request: Request, response: Response) {

    const products = await prisma.product.findMany({});

    return response.json(products);
  }
}

export class controllerproductsId {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const userExists = await prisma.product.findUnique({
      where: {
        id: id
      }
    })

    if (!userExists) {
      return response.status(400).json({
        msg: `Esse id: ${id} não estar vinculado a nem uma produto, tente outro!`
      })
    }

    const products = await prisma.product.findUnique({
      where: {
        id: id
      },
      include: {
        products_categories: {
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