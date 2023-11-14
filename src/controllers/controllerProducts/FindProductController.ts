import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

import { v4 as uuidv4 } from 'uuid';

const uuId = uuidv4()

//console.log(uuId)

export class FindproductsController {
  async handle(request: Request, response: Response) {

    const products = await prisma.product.findMany({});

    return response.json(products);
  }
}
