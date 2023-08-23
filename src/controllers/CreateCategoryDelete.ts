import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class controllerCategoryDelete {
    async handle(request: Request, response: Response) {
        const id = request.params.id;

        const idExists = await prisma.category.findUnique({
            where: {
                id: id
            }
        })

        if (!idExists) {
            return response.status(400).json({
                msg: `Esse id: ${id} não existe mais no database`
            })
        }

        const product = await prisma.category.delete({
            where: {
                id: id
            }
        })

        return response.json({ msg: "Categoria deletado com sucesso!", product });
    }
}
