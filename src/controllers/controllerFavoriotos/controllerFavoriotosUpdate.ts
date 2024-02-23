import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient"; 

export class ControllerFavoritUpdate {
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
      slug,
      url_product 
    } = request.body;


    if (
      typeof price === 'number' ||
      typeof bar_code === 'number' ||
      typeof color === 'number' ||
      typeof size === 'number' ||
      typeof name === 'number' ||
      typeof quantity === 'number' ||
      typeof description === 'number' ||
      typeof slug === 'number' ||
      typeof url_product === 'number' ||
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
      typeof url_product === 'undefined' ||
      typeof image === 'undefined'
    ) {
      return {
        msg: `Algum campo esta faltando! Verifique novamente agora!`
      }
    }


    const favoritUpdate = await prisma.favorito.update({
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
        slug,
        url_product
      },
    })
    
    return response.status(201).json(favoritUpdate)
  }
}
