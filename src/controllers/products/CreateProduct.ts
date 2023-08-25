import { Request, Response } from "express";
import { AppError } from "../../err/AppErros";
import { prisma } from "../../prisma_Client_Orm/prismaClient";
import { CreatProductDTO } from "./dtos/CreatUsersDTO";

export class CreateProduct {
  async execute({
    name,
    price,
    bar_code,
    size,
    color,
    description,
    image,
    quantity,
    slug
  }: CreatProductDTO) {

    /* Aque abaixo começamos a cria nossa regra de negocio, verificamos se o bar_code existe, ou se o slug ja existe, 
    se sim, ira mostra uma messagem dizendo que ja isExpressionStatement, se não ele cria o produto*/
    const barcodeExists = await prisma.products.findUnique({
      where: {
        bar_code: bar_code
      }
    })

    if (barcodeExists) {
      throw new AppError(`\n\n Esse bar_code: ${bar_code} já estar cadastrado em outro produto, tente outro!\n\n `)
    }

    const slugExists = await prisma.products.findUnique({
      where: {
        slug: slug
      }
    })

    if (slugExists) {
      throw new AppError(`Esse slug: ${slug} já estar cadastrado em outro produto, tente outro!\n\n `)
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
      return {
        msg: `Algum campo estar em número! Lembre-se que, todos os campos tem estar em string ok!`
      }
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
      return {
        msg: `Algum campo esta faltando! Verifique novamente!`
      }
    }

    const product = await prisma.products.create({
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

    return product;
  }
}
