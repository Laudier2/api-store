import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class ControllerCompraParamesId {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const idExists = await prisma.compra.findUnique({
            where: {
              id: id
            }
          })
      
          if(!idExists){
            return response.status(400).json({
              msg: `Esse id: ${id} não existe mais no prisma_Client_Orm ou você esta usando o id errado!`
            })
          }  

        const compra = await prisma.user.findUnique({
            where: {
                id: id
            }
        })

        return response.status(200).json(compra)
    }
}