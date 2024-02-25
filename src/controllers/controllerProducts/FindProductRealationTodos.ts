import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class FindProductRealationTodos {
    async handle(request: Request, response: Response) {
        const { id } = request.body;

        const productReleation = await prisma.comentarioRealations.findMany({
            where: {
                id: id
              },
              include: {
                product: true,
                comentarios: true
              }
        
        })

        return response.status(200).json(productReleation);
    }
}