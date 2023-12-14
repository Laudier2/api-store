import { Request, Response } from "express";
import { AppError } from "../../err/AppErros";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class ControllerCategoryDeleteRelations {
    async handle(request: Request, response: Response) {
        const id = request.params.id;

        const idExists = await prisma.product_Category.findUnique({
            where: {
                id: id
            }
        })

        if (!idExists) {
            throw new AppError(`Esse id: ${id} não existe mais no database`)
        }

        const product = await prisma.product_Category.delete({
            where: {
                id: id
            }
        })

        try {
            return response.json({ msg: "Categoria deletado com sucesso!", product });
        } catch (error) {
            throw new Error(`A categoria não pode ser deletada!`)
        }
    }
}
