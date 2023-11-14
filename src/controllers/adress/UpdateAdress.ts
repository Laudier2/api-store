import { prisma } from "../../prisma_Client_Orm/prismaClient";
import { UpdateAdressDTO } from "./dtos/UpdateAdressDTO";

export class UpdateAdress {

  async execute({
    id,
    apartment_or_house,
    street,
    city,
    cep,
    state,
    number,
    district,
  }: UpdateAdressDTO) {

    if (
      typeof number === 'number' ||
      typeof apartment_or_house === 'number' ||
      typeof cep === 'number' ||
      typeof district === 'number' ||
      typeof state === 'number' ||
      typeof street === 'number' ||
      typeof city === 'number' 
    ) {
      return ({
        msg: `Algum campo estar em número! Lembre-se que, todos os campos tem estar em string ok!`
      })
    }

    if (
      typeof number === 'undefined' ||
      typeof apartment_or_house === 'undefined' ||
      typeof cep === 'undefined' ||
      typeof district === 'undefined' ||
      typeof state === 'undefined' ||
      typeof street === 'undefined' ||
      typeof city === 'undefined'
    ) {
      return ({
        msg: `Algum campo esta faltando! Verifique novamente!`
      })
    }

    // Se o Ususario não exite ele cria aqui
    const user = await prisma.adress.update({
      where: {
        id: id,
      },
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
