import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class ControllerComentarioDelete {
  async handle(request: Request, response: Response) {
    const id = request.params.id;

    const idExists = await prisma.comentarios.findUnique({
      where: {
        id: id
      }
    })

    if(!idExists){
      return response.status(400).json({
        msg: `Esse id: ${id} não existe mais no database`
      })
    }  

    const comentario = await prisma.comentarios.delete({     
        where: {
          id: id
        }
      })

    return response.json({msg: "Comentario deletado com sucesso!", comentario});
  }
}
