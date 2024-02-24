import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class controllerComentarioCreateRelation {
  async handle(request: Request, response: Response) {
    const {id_comentario, id_product,} = request.body;

    if (
      typeof id_comentario === 'number' ||
      typeof id_product === 'number'
    ) {
      return {
        msg: `Algum campo estar em número! 
        Lembre-se que, todos os campos tem estar em string ok!
        Ou o id esta errado, verifique novamente
        `
      }
    }

    if (
      typeof id_comentario === 'undefined' ||
      typeof id_product === 'undefined'
    ) {
      return {
        msg: `Algum campo esta faltando! Verifique novamente!
        Ou o id esta errado, verifique novamente`
      }
    }

    const productCategory = await prisma.comentarioRealations.create({
      data: {
        id_comentario,
        id_product,
      },
    });

    return response.status(201).json(productCategory);
  }
}
