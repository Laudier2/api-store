import { prisma } from "../../prisma_Client_Orm/prismaClient";
import { CreatAdressDTO } from "./dtos/CreatAdressDTO";

export class FindAdress {

  async execute({
    home,
    city,
    cep,
    street,
    image,
    state,
    number,
    district,
  }: CreatAdressDTO) {

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
    const user = await prisma.adress.findMany({})

    return user
  }
}
