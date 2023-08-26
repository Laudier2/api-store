import { Request, Response } from "express";
import * as bcrypt from "bcrypt";
import { AppError } from "../../err/AppErros";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

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

    const userExists = await prisma.user.findUnique({
      where: {
        email: email
      }
    })

    if (userExists) {
      throw new AppError(`O email ${email} já existe!  E lembre-se que, todos os campos tem que ser string ok!`)
    }

    if (typeof id === "undefined") {
      return response.status(400).json({
        msg: `O id: ${id === undefined ? "Você não inserio nem um id!" : id} não existe, ou não esta vinculado a nem um usuário, tente outro!`
      })
    }


    /*if (
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
    }*/

    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        email,
        password: cryptPass
      }
    })

    try {
      return response.status(201).json(user)
    } catch (error) {
      throw new Error(`Você não pode usar esse email: ${email}! porque ele ja esta sendo usado por outro usuario, se for seu entre na conta!.`)
    }
  }
}
