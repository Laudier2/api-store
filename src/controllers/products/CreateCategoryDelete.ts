import { Request, Response } from "express";
import { AppError } from "../../err/AppErros";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class controllerCategoryDelete {
    async handle(request: Request, response: Response) {
        const id = request.params.id;

        const idExists = await prisma.category.findUnique({
            where: {
                id: id
            }
        })

        if (!idExists) {
            throw new AppError(`Esse id: ${id} não existe mais no database`)
        }

        const product = await prisma.category.delete({
            where: {
                id: id
            }
        })

        return response.json({ msg: "Categoria deletado com sucesso!", product });
    }
}
