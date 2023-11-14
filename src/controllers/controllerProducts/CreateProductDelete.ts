import { Request, Response } from "express";
import { AppError } from "../../err/AppErros";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class controllerproductsDelete {
    async handle(request: Request, response: Response) {
        const id = request.params.id;

        const idExists = await prisma.product.findUnique({
            where: {
                id: id
            }
        })

        if (!idExists) {
            throw new AppError(`Esse id: ${id} não existe mais no database`)
        }

        const products = await prisma.product.delete({
            where: {
                id: id
            }
        })

        return response.json({ msg: "Produto deletado com sucesso!", products });
    }
}
