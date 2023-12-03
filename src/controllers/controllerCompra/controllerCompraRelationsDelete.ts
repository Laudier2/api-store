import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class ControllerCompraRelationsDel {
  async handle(request: Request, response: Response) {
    const id = request.params.id;

    const idExists = await prisma.compraRealations.findUnique({
      where: {
        id: id
      }
    })

    if(!idExists){
      return response.status(400).json({
        msg: `Esse id: ${id} não existe mais no database`
      })
    }  

    const compraDEl = await prisma.compraRealations.delete({     
        where: {
          id: id
        },
        include: {
          compra: true
        }
      })

    return response.json({msg: "Compra deletado com sucesso!", compraDEl});
  }
}

