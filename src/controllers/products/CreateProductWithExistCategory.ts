import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";
import { AppError } from "../../err/AppErros";

export class CreateProductWithExistCategory {
  async handle(request: Request, response: Response) {
    const { name, price, bar_code, color, size, quantity, description, image, slug, id_category } = request.body;

    const userExists = await prisma.category.findUnique({
      where: {
        id: id_category
      }
    })

    if (!userExists) {
      throw new AppError(`Esse id: ${id_category} não estar vinculado a nem uma categoria, tente outro!`)
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

    const product = await prisma.product_Category.create({
      data: {
        products: {
          create: {
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
            id: id_category,
          },
        },
      },
    });

    return response.status(201).json(product)
  }
}