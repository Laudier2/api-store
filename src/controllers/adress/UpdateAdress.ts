import { prisma } from "../../prisma_Client_Orm/prismaClient";
import { UpdateAdressDTO } from "./dtos/UpdateAdressDTO";

export class UpdateAdress {

  async execute({
    id,
    home,
    city,
    cep,
    street,
    image,
    state,
    number,
    district,
  }: UpdateAdressDTO) {

    if (
      typeof number === 'number' ||
      typeof cep === 'number' ||
      typeof district === 'number' ||
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
      typeof cep === 'undefined' ||
      typeof district === 'undefined' ||
      typeof state === 'undefined' ||
      typeof street === 'undefined' ||
      typeof city === 'undefined' ||
      typeof home === 'undefined' ||
      typeof image === 'undefined'
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
        home,
        number,
        cep,
        street,
        city,
        state,
        image,
        district
      }
    })

    return user
  }
}
