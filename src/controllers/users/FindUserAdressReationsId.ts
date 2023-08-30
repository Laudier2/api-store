import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class FindRelationsUserAdressId {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const user = await prisma.user.findMany({
      where: {
        id: id,
      },
      include: {
        User_Adress: {
          include: {
            adress: true
          }
        }
      }
    })

    return response.status(200).json(user)

  }
}
