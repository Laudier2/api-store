import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class ControllerFavoritDelete {
  async handle(request: Request, response: Response) {
    const id = request.params.id;

    const idExists = await prisma.compra.findUnique({
      where: {
        id: id
      }
    })

    if(!idExists){
      return response.status(400).json({
        msg: `Esse id: ${id} não existe mais no database`
      })
    }  

    const favoritoDell = await prisma.favorito.delete({     
        where: {
          id: id
        }
      })

    return response.json({msg: "favoritoDell deletado com sucesso!", favoritoDell});
  }
}
