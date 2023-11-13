import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";
import { AppError } from "../../err/AppErros";

export class CreateProductWithExistcategories {
  async handle(request: Request, response: Response) {
    const { id, name, price, bar_code, color, size, quantity, description, image, slug, id_categories } = request.body;

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

    const userExists = await prisma.categories.findUnique({
      where: {
        id: id_categories
      }
    })

    if (!userExists) {
      throw new AppError(`Esse id: ${id_categories} não estar vinculado a nem uma categoria, tente outro!`)
    }


    const product = await prisma.product_category_relations.create({
      data: {
        id,
        products: {
          create: {
            id,
            name,
            price,
            bar_code,
            color,
            size,
            quantity,
            description,
            image,
            slug
          },
        },
        categories: {
          connect: {
            id: id_categories,
          },
        },
      },
    });

    return response.status(201).json(product)
  }
}
