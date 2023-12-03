import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class ControllerCompra {
  async handle(request: Request, response: Response) {
    const { city, cep, street, state, number, district, apartment_or_house, productslist, email, name, phone, code_compra } = request.body;
    
    if(
      typeof number === 'number' || 
      typeof cep === 'number' || 
      typeof state === 'number' ||
      typeof street === 'number' ||
      typeof apartment_or_house === 'number' ||
      typeof district === 'number' ||
      typeof name === 'number' ||
      typeof productslist === 'number' ||
      typeof email === 'number' ||
      typeof phone === 'number' ||
      typeof city === 'number'
    ){
      return response.status(501).json({
        msg: `Lembre-se que, todos os campos tem que estar em string ok!`
      })
    }  

    if(
        typeof cep === 'undefined' || 
        typeof state === 'undefined' ||
        typeof street === 'undefined' ||
        typeof apartment_or_house === 'undefined' ||
        typeof district === 'undefined' ||
        typeof city === 'undefined' || 
        typeof name === 'undefined' ||
        typeof productslist === 'undefined' ||
        typeof email === 'undefined' ||
        typeof code_compra === 'undefined' ||
        typeof phone === 'undefined'
    ){
      return response.status(500).json({
        msg: `Algum campo esta faltando!`
      })
    }   

    const compra = await prisma.compra.create({
      data: {
        name,
        email,
        phone,
        district, 
        apartment_or_house, 
        street, 
        city, 
        cep, 
        number, 
        productslist,
        state,
        code_compra
      }
    })
    
    return response.status(201).json({ message: 'Compra criada com sucesso', compra})
  }
}
