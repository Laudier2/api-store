import { Request, Response } from "express";
import { prisma } from "../../../prisma_Client_Orm/prismaClient";

export class ControllerBannerDelete {
  async handle(request: Request, response: Response) {
    const id = request.params.id;

    const idExists = await prisma.bannes.findUnique({
      where: {
        id: id
      }
    })

    if(!idExists){
      return response.status(400).json({
        msg: `Esse id: ${id} não existe mais no database`
      })
    }  

    const BannesDel = await prisma.bannes.delete({     
        where: {
          id: id
        }
      })

    return response.json({msg: "Usuario deletado com sucesso!", BannesDel});
  }
}

