import { Request, Response } from "express";
import { prisma } from "../../../prisma_Client_Orm/prismaClient";

export class ControllerOfertasDelete {
  async handle(request: Request, response: Response) {
    const id = request.params.id;

    const idExists = await prisma.ofertas.findUnique({
      where: {
        id: id
      }
    })

    if(!idExists){
      return response.status(400).json({
        msg: `Esse id: ${id} não existe mais no database`
      })
    }  

    const OfertasDel = await prisma.ofertas.delete({     
        where: {
          id: id
        }
      })

    return response.json({msg: "Usuario deletado com sucesso!", OfertasDel});
  }
}

