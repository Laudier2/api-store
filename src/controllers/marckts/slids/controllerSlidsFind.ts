import { Request, Response } from "express";
import { prisma } from "../../../prisma_Client_Orm/prismaClient"; 

export class ControllerSlidsFind {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const SlidsFind = await prisma.slids.findMany({
      where: {
        id
      }
    })

    return response.status(200).json(SlidsFind)

  }
}
