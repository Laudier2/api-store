import { Request, Response } from "express";
import { AppError } from "../../err/AppErros";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class CreateUpdateProduct {
  async handle(request: Request, response: Response) {
    const {
      id,
      name,
      price,
      bar_code,
      size,
      color,
      description,
      image,
      quantity,
      slug
    } = request.body;

    const barcodeExists = await prisma.product.findUnique({
      where: {
        bar_code: bar_code
      }
    })

    if (barcodeExists && id !== barcodeExists.id) {
      throw new AppError(`Esse bar_code: ${bar_code} já estar cadastrado em outro produto, tente outro!`)
    }

    const slugExists = await prisma.product.findUnique({
      where: {
        slug: slug
      }
    })

    if (slugExists && id !== slugExists.id) {
      throw new AppError(`Esse slug: ${slug} já estar cadastrado em outro produto, tente outro!`)
    }


    if (
      typeof price === 'number' ||
      typeof bar_code === 'number' ||
      typeof color === 'number' ||
      typeof size === 'number' ||
      typeof name === 'number' ||
      typeof quantity === 'number' ||
      typeof description === 'number' ||
      typeof slug === 'number' ||
      typeof image === 'number'
    ) {
      return response.status(500).json({
        msg: `Algum campo estar em número! Lembre-se que, todos os campos tem estar em string ok!`
      })
    }

    if (
      typeof price === 'undefined' ||
      typeof size === 'undefined' ||
      typeof description === 'undefined' ||
      typeof color === 'undefined' ||
      typeof name === 'undefined' ||
      typeof bar_code === 'undefined' ||
      typeof quantity === 'undefined' ||
      typeof slug === 'undefined' ||
      typeof image === 'undefined'
    ) {
      return response.status(500).json({
        msg: `Algum campo esta faltando! Verifique novamente!`
      })
    }

    const product = await prisma.product.update({
      where: {
        id: id,
      },
      data: {
        name,
        price,
        bar_code,
        size,
        color,
        description,
        image,
        quantity,
        slug
      },
    });

    return response.status(200).json(product);
  }
}
