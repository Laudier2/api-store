import { prisma } from "../../prisma_Client_Orm/prismaClient";
import { CreatAdressDTO } from "./dtos/CreatAdressDTO";

export class CreateAdress {

  async execute({
    street,
    apartment_or_house,
    city,
    cep,
    state,
    number,
    district,
  }: CreatAdressDTO) {

    if (
      typeof number === 'number' ||
      typeof apartment_or_house === 'number' ||
      typeof cep === 'number' ||
      typeof state === 'number' ||
      typeof street === 'number' ||
      typeof city === 'number' ||
      typeof district === 'number' 
    ) {
      return ({
        msg: `Algum campo estar em número! Lembre-se que, todos os campos tem estar em string ok!`
      })
    }

    if (
      typeof number === 'undefined' ||
      typeof apartment_or_house === 'undefined' ||
      typeof cep === 'undefined' ||
      typeof name === 'undefined' ||
      typeof state === 'undefined' ||
      typeof street === 'undefined' ||
      typeof city === 'undefined' ||
      typeof district === 'undefined'
    ) {
      return ({
        msg: `Algum campo esta faltando! Verifique novamente!`
      })
    }

    // Se o Ususario não exite ele cria aqui
    const user = await prisma.adress.create({
      data: {
        apartment_or_house,
        street,
        city,
        cep,
        state,
        number,
        district,
      }
    })

    return user
  }
}
