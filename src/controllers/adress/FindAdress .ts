import { prisma } from "../../prisma_Client_Orm/prismaClient";
import { CreatAdressDTO } from "./dtos/CreatAdressDTO";

export class FindAdress {

  async execute({
    name,
    home,
    phone,
    city,
    cep,
    street,
    image,
    state,
    number,
    district,
  }: CreatAdressDTO) {

    // Se o Ususario não exite ele cria aqui
    const user = await prisma.adress.findMany({})

    return user
  }
}
