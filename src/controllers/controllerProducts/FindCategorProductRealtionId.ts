
import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class FindCategoryRelation {
    async handle(request: Request, response: Response) {
        const { id } = request.body;

        const categoryReleation = await prisma.product_Category.findMany({
            where: {
                id: id
              },
              include: {
                products: true
              }
        })

        return response.status(200).json(categoryReleation);
    }
}