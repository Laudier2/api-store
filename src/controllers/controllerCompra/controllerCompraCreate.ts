import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class ControllerCompra {
  async handle(request: Request, response: Response) {
    const { 
      city, 
      cep, 
      street, 
      state, 
      number, 
      district, 
      apartment_or_house,
      productName,
      productPrice,
      productQuantity,
      productImage,
      productSize,    
      productClolor,
      productUrl,
      email, 
      name, 
      phone, 
      code_compra 
    } = request.body;
    
    if(
      typeof number === 'number' || 
      typeof cep === 'number' || 
      typeof state === 'number' ||
      typeof street === 'number' ||
      typeof apartment_or_house === 'number' ||
      typeof district === 'number' ||
      typeof name === 'number' ||
      typeof productName === 'number' ||
      typeof productPrice === 'number' ||
      typeof productImage === 'number' ||
      typeof productQuantity === 'number' ||
      typeof productSize === 'number' ||
      typeof productClolor === 'number' ||
      typeof productUrl === 'number' ||
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
        typeof productName === 'undefined' ||
        typeof productPrice === 'undefined' ||
        typeof productImage === 'undefined' ||
        typeof productQuantity === 'undefined' ||
        typeof productSize === 'undefined' ||
        typeof productClolor === 'undefined' ||
        typeof productUrl === 'undefined' ||
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
        productName,
        productPrice,
        productQuantity,
        productImage,
        productSize,    
        productClolor,
        productUrl,
        state,
        code_compra
      }
    })
    
    return response.status(201).json({ message: 'Compra criada com sucesso', compra})
  }
}

export class ControllerCompra1 {
  async handle(request: Request, response: Response) {
    const { 
      city, 
      cep, 
      street, 
      state, 
      number, 
      district, 
      apartment_or_house,
      productName,
      productPrice,
      productQuantity,
      productImage,
      productSize,    
      productClolor,
      productUrl,
      email, 
      name, 
      phone, 
      code_compra 
    } = request.body;
    
    if(
      typeof number === 'number' || 
      typeof cep === 'number' || 
      typeof state === 'number' ||
      typeof street === 'number' ||
      typeof apartment_or_house === 'number' ||
      typeof district === 'number' ||
      typeof name === 'number' ||
      typeof productName === 'number' ||
      typeof productPrice === 'number' ||
      typeof productImage === 'number' ||
      typeof productQuantity === 'number' ||
      typeof productSize === 'number' ||
      typeof productClolor === 'number' ||
      typeof productUrl === 'number' ||
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
        typeof productName === 'undefined' ||
        typeof productPrice === 'undefined' ||
        typeof productImage === 'undefined' ||
        typeof productQuantity === 'undefined' ||
        typeof productSize === 'undefined' ||
        typeof productClolor === 'undefined' ||
        typeof productUrl === 'undefined' ||
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
        productName,
        productPrice,
        productQuantity,
        productImage,
        productSize,    
        productClolor,
        productUrl,
        state,
        code_compra
      }
    })

    const compra1 = await prisma.compra1.create({
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
        productName,
        productPrice,
        productQuantity,
        productImage,
        productSize,    
        productClolor,
        productUrl,
        state,
        code_compra
      }
    })
    
    return response.status(201).json({ message: 'Compra criada com sucesso', compra1})
  }
}

export class ControllerCompra2 {
  async handle(request: Request, response: Response) {
    const { 
      city, 
      cep, 
      street, 
      state, 
      number, 
      district, 
      apartment_or_house,
      productName,
      productPrice,
      productQuantity,
      productImage,
      productSize,    
      productClolor,
      productUrl,
      email, 
      name, 
      phone, 
      code_compra 
    } = request.body;
    
    if(
      typeof number === 'number' || 
      typeof cep === 'number' || 
      typeof state === 'number' ||
      typeof street === 'number' ||
      typeof apartment_or_house === 'number' ||
      typeof district === 'number' ||
      typeof name === 'number' ||
      typeof productName === 'number' ||
      typeof productPrice === 'number' ||
      typeof productImage === 'number' ||
      typeof productQuantity === 'number' ||
      typeof productSize === 'number' ||
      typeof productClolor === 'number' ||
      typeof productUrl === 'number' ||
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
        typeof productName === 'undefined' ||
        typeof productPrice === 'undefined' ||
        typeof productImage === 'undefined' ||
        typeof productQuantity === 'undefined' ||
        typeof productSize === 'undefined' ||
        typeof productClolor === 'undefined' ||
        typeof productUrl === 'undefined' ||
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
        productName,
        productPrice,
        productQuantity,
        productImage,
        productSize,    
        productClolor,
        productUrl,
        state,
        code_compra
      }
    })

    const compra2 = await prisma.compra2.create({
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
        productName,
        productPrice,
        productQuantity,
        productImage,
        productSize,    
        productClolor,
        productUrl,
        state,
        code_compra
      }
    })
    
    return response.status(201).json({ message: 'Compra criada com sucesso', compra2})
  }
}

export class ControllerCompra3 {
  async handle(request: Request, response: Response) {
    const { 
      city, 
      cep, 
      street, 
      state, 
      number, 
      district, 
      apartment_or_house,
      productName,
      productPrice,
      productQuantity,
      productImage,
      productSize,    
      productClolor,
      productUrl,
      email, 
      name, 
      phone, 
      code_compra 
    } = request.body;
    
    if(
      typeof number === 'number' || 
      typeof cep === 'number' || 
      typeof state === 'number' ||
      typeof street === 'number' ||
      typeof apartment_or_house === 'number' ||
      typeof district === 'number' ||
      typeof name === 'number' ||
      typeof productName === 'number' ||
      typeof productPrice === 'number' ||
      typeof productImage === 'number' ||
      typeof productQuantity === 'number' ||
      typeof productSize === 'number' ||
      typeof productClolor === 'number' ||
      typeof productUrl === 'number' ||
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
        typeof productName === 'undefined' ||
        typeof productPrice === 'undefined' ||
        typeof productImage === 'undefined' ||
        typeof productQuantity === 'undefined' ||
        typeof productSize === 'undefined' ||
        typeof productClolor === 'undefined' ||
        typeof productUrl === 'undefined' ||
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
        productName,
        productPrice,
        productQuantity,
        productImage,
        productSize,    
        productClolor,
        productUrl,
        state,
        code_compra
      }
    })

    const compra3 = await prisma.compra3.create({
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
        productName,
        productPrice,
        productQuantity,
        productImage,
        productSize,    
        productClolor,
        productUrl,
        state,
        code_compra
      }
    })
    
    return response.status(201).json({ message: 'Compra criada com sucesso', compra3})
  }
}

export class ControllerCompra4 {
  async handle(request: Request, response: Response) {
    const { 
      city, 
      cep, 
      street, 
      state, 
      number, 
      district, 
      apartment_or_house,
      productName,
      productPrice,
      productQuantity,
      productImage,
      productSize,    
      productClolor,
      productUrl,
      email, 
      name, 
      phone, 
      code_compra 
    } = request.body;
    
    if(
      typeof number === 'number' || 
      typeof cep === 'number' || 
      typeof state === 'number' ||
      typeof street === 'number' ||
      typeof apartment_or_house === 'number' ||
      typeof district === 'number' ||
      typeof name === 'number' ||
      typeof productName === 'number' ||
      typeof productPrice === 'number' ||
      typeof productImage === 'number' ||
      typeof productQuantity === 'number' ||
      typeof productSize === 'number' ||
      typeof productClolor === 'number' ||
      typeof productUrl === 'number' ||
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
        typeof productName === 'undefined' ||
        typeof productPrice === 'undefined' ||
        typeof productImage === 'undefined' ||
        typeof productQuantity === 'undefined' ||
        typeof productSize === 'undefined' ||
        typeof productClolor === 'undefined' ||
        typeof productUrl === 'undefined' ||
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
        productName,
        productPrice,
        productQuantity,
        productImage,
        productSize,    
        productClolor,
        productUrl,
        state,
        code_compra
      }
    })

    const compra4 = await prisma.compra4.create({
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
        productName,
        productPrice,
        productQuantity,
        productImage,
        productSize,    
        productClolor,
        productUrl,
        state,
        code_compra
      }
    })
    
    return response.status(201).json({ message: 'Compra criada com sucesso', compra4})
  }
}