import { prisma } from "../../prisma_Client_Orm/prismaClient";
import { RelationUserAdresstDTO } from "./dtos/RelationUserAdressDTO";

export class RelationUserAdress {
  async execute({ id_user, id_adress, id }: RelationUserAdresstDTO) {

    if (
      typeof id_user === 'number' ||
      typeof id_adress === 'number'
    ) {
      return {
        msg: `Algum campo estar em número! 
        Lembre-se que, todos os campos tem estar em string ok!
        Ou o id esta errado, verifique novamente
        `
      }
    }

    if (
      typeof id_user === 'undefined' ||
      typeof id_adress === 'undefined'
    ) {
      return {
        msg: `Algum campo esta faltando! Verifique novamente!
        Ou o id esta errado, verifique novamente`
      }
    }

    const relatiosnUserAdress = await prisma.relationsAdress.create({
      data: {
        id,
        id_user,
        id_adress,
      },
    });

    return relatiosnUserAdress;
  }
}
