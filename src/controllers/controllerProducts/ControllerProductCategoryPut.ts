import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";
import { AppError } from "../../err/AppErros";

export class CreateproductsWithExistCategoryPut {
  async handle(request: Request, response: Response) {
    const { id, name, home, price, url_product, bar_code, color, size, quantity, description, image, slug } = request.body;

    const userExists = await prisma.product.findUnique({
      where: {
        id: id
      }
    })

    if (!userExists) {
      throw new AppError(`Esse id: ${id} não estar cadastrado, tente outro!`)
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
      typeof home === 'number' ||
      typeof url_product === 'number' ||
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
      typeof home === 'undefined' ||
      typeof url_product === 'undefined' ||
      typeof image === 'undefined'
    ) {
      return response.status(500).json({
        msg: `Algum campo esta faltando! Verifique novamente!`
      })
    }

    const products = await prisma.product.update({
      where: {
        id
      },
      data: {
        name,
        price,
        bar_code,
        color,
        size,
        quantity,
        description,
        image,
        slug,
        url_product
      }
    });

    return response.json(products);
  }
}
