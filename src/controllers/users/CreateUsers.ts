import { prisma } from "../../prisma_Client_Orm/prismaClient";
import * as bcrypt from "bcrypt"
import { CreatUserDTO } from "./dtos/CreatUsersDTO";
import { v4 as uuidv4 } from 'uuid';

const uuId = uuidv4()

export class CreateUser {

  async execute({
    name,
    age,
    email,
    phone,
    access,
    image,
    password
  }: CreatUserDTO) {

    // Verifica se o ususario já existe

    if (
     
      typeof password === 'number' ||
      typeof name === 'number' ||
      typeof email === 'number' ||
      typeof phone === 'number' ||
      typeof age === 'number' ||
      typeof access === 'number'
    ){
      return ({
        msg: `Algum campo estar em número! Lembre-se que, todos os campos tem estar em string ok!`
      })
    }

    if (
      typeof phone === 'undefined' ||
      typeof age === 'undefined' ||
      typeof password === 'undefined' ||
      typeof name === 'undefined' ||
      typeof email === 'undefined'
    ) {
      return ({
        msg: `Algum campo esta faltando! Verifique novamente!`
      })
    }

    const userExists = await prisma.users.findUnique({
      where: {
        email
      }
    })

    console.log(userExists)

    if (userExists) {
      return (`O email ${email} já existe!  E lembre-se que, todos os campos tem que ser string, e o email não pode ser um que ja ta cadastarado ok!`)
    }
    const cryptPass = await bcrypt.hash(password, 8)

    // Se o Ususario não exite ele cria aqui
    const user = await prisma.users.create({
      data: {
        name,
        age,
        email,
        phone,
        access,
        image,
        password: cryptPass
      }
    })

    return user
  }
}
