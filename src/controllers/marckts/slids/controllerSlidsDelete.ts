import { Request, Response } from "express";
import { prisma } from "../../../prisma_Client_Orm/prismaClient";

export class ControllerSlidsDelete {
  async handle(request: Request, response: Response) {
    const id = request.params.id;

    const idExists = await prisma.slids.findUnique({
      where: {
        id: id
      }
    })

    if(!idExists){
      return response.status(400).json({
        msg: `Esse id: ${id} não existe mais no database`
      })
    }  

    const SlidsDel = await prisma.slids.delete({     
        where: {
          id: id
        }
      })

    return response.json({msg: "Usuario deletado com sucesso!", SlidsDel});
  }
}

