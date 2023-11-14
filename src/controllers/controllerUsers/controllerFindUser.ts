import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class ControllerFind {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const user = await prisma.user.findMany({})

    return response.status(200).json(user)

  }
}
