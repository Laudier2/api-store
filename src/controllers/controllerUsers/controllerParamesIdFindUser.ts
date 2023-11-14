import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";
import { AppError } from "../../err/AppErros";

export class UserParamesId {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const idExists = await prisma.user.findUnique({
      where: {
        id: id
      }
    })

    if (!idExists) {
      throw new AppError(`Esse id: ${id} não existe mais no database ou você esta usando o id errado!`)
    }

    const user = await prisma.user.findUnique({
      where: {
        id: id
      }
    })

    return response.status(200).json(user)
  }
}