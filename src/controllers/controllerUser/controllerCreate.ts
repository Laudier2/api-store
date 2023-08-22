import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import * as bcrypt from "bcrypt"

export class ControllerCreate {
  async handle(request: Request, response: Response) {
    const { name, email, password, home, phone, city, cep, street, image, state, number } = request.body;

    const cryptPass = await bcrypt.hash(password, 8)

    const userExists = await prismaClient.user.findUnique({
      where: {
        email: email
      }
    })

    if (userExists) {
      return response.status(400).json({
        msg: `O email ${email} já existe!  E lembre-se que, todos os campos tem que ser string ok!`
      })
    }


    if (
      typeof number === 'number' ||
      typeof phone === 'number' ||
      typeof cep === 'number' ||
      typeof password === 'number' ||
      typeof name === 'number' ||
      typeof email === 'number' ||
      typeof state === 'number' ||
      typeof street === 'number' ||
      typeof city === 'number' ||
      typeof home === 'number' ||
      typeof image === 'number'
    ) {
      return response.status(500).json({
        msg: `Algum campo estar em número! Lembre-se que, todos os campos tem estar em string ok!`
      })
    }

    if (
      typeof number === 'undefined' ||
      typeof phone === 'undefined' ||
      typeof cep === 'undefined' ||
      typeof password === 'undefined' ||
      typeof name === 'undefined' ||
      typeof email === 'undefined' ||
      typeof state === 'undefined' ||
      typeof street === 'undefined' ||
      typeof city === 'undefined' ||
      typeof home === 'undefined' ||
      typeof image === 'undefined'
    ) {
      return response.status(500).json({
        msg: `Algum campo esta faltando! Verifique novamente!`
      })
    }

    const user = await prismaClient.user.create({
      data: {
        email,
        name,
        phone,
        image,
        home,
        password: cryptPass,
        street,
        city,
        cep,
        number,
        state
      }
    })

    return response.status(201).json({ message: 'Usuario criado com ', user })
  }
}
