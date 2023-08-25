import { Request, Response } from "express";
import { AppError } from "../../err/AppErros";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class controllerDelete {
  async handle(request: Request, response: Response) {
    const id = request.params.id;

    const idExists = await prisma.user.findUnique({
      where: {
        id: id
      }
    })

    if (!idExists) {

      throw new AppError(`Esse id: ${id} não existe mais no database`)

    }

    const user = await prisma.user.delete({
      where: {
        id: id
      }
    })

    return response.json({ msg: "Usuario deletado com sucesso!", user });
  }
}
