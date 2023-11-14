import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class FindCategoryRelation {
    async handle(request: Request, response: Response) {

        const categoryReleation = await prisma.product_Category.findMany({})

        return response.status(200).json(categoryReleation);
    }
}