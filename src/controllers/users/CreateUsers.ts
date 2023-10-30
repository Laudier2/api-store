import { prisma } from "../../prisma_Client_Orm/prismaClient";
import * as bcrypt from "bcrypt"
import { AppError } from "../../err/AppErros";
import { CreatUserDTO } from "./dtos/CreatUsersDTO";

export class CreateUser {

  async execute({
    name,
    phone,
    age,
    access,
    email,
    password
  }: CreatUserDTO) {

    const cryptPass = await bcrypt.hash(password, 8)

    // Verifica se o ususario já existe
    const userExists = await prisma.user.findUnique({
      where: {
        email: email
      }
    })

    if (userExists) {
      throw new AppError(`O email ${email} já existe!  E lembre-se que, todos os campos tem que ser string ok!`)
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
      typeof city === 'number' ||
      typeof home === 'number' ||
      typeof image === 'number'
    ) {
      return ({
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
      return ({
        msg: `Algum campo esta faltando! Verifique novamente!`
      })
    }*/

    // Se o Ususario não exite ele cria aqui
    const user = await prisma.user.create({
      data: {
        name,
        age,
        phone,
        access,
        email,
        password: cryptPass
      }
    })

    return user
  }
}
