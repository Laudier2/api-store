import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient()

export class controllerUpdate {
  async handle(request: Request, response: Response) {
    const {
      id,
      name,
      email,
      password,
      phone,
      image,
      home,
      street,
      city,
      cep,
      number,
      state
    } = request.body;

    const cryptPass = await bcrypt.hash(password, 8)

    const userExists = await prisma.user.findFirst({
      where: {
        email: email
      }
    })

    if (userExists === email) {
      return response.status(400).json({
        msg: `Você não pode usar esse email: ${userExists}! porque ele ja esta ja esta cadastrado!.`
      })
    }

    if (typeof id === "undefined") {
      return response.status(400).json({
        msg: `O id: ${id === undefined ? "Você não inserio nem um id!" : id} não existe, ou não esta vinculado a nem um usuário, tente outro!`
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
      typeof home === 'number' ||
      typeof city === 'number' ||
      typeof image === 'number'
    ) {
      return response.status(500).json({
        msg: `Algum campo esta faltando ou estão em números! Lembre-se que, todos os campos tem que estar em string ok!`
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
      typeof home === 'undefined' ||
      typeof city === 'undefined' ||
      typeof image === 'undefined'
    ) {
      return response.status(500).json({
        msg: `Algum campo esta faltando! E lembre-se que todos os campos tem que ser string ok!`
      })
    }

    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        email,
        name,
        phone,
        image,
        password: cryptPass,
        home,
        street,
        city,
        cep,
        number,
        state
      }
    })

    return response.status(201).json(user)
  }
}
