import { prisma } from "../../prisma_Client_Orm/prismaClient";
import { CreatProducRelationtDTO } from "./dtos/CreatProductRelationDTO";

export class CreateProductCategoryRelation {
  async execute({ id_product, id_category }: CreatProducRelationtDTO) {

    if (
      typeof id_category === 'number' ||
      typeof id_product === 'number'
    ) {
      return {
        msg: `Algum campo estar em número! 
        Lembre-se que, todos os campos tem estar em string ok!
        Ou o id esta errado, verifique novamente
        `
      }
    }

    if (
      typeof id_category === 'undefined' ||
      typeof id_product === 'undefined'
    ) {
      return {
        msg: `Algum campo esta faltando! Verifique novamente!
        Ou o id esta errado, verifique novamente`
      }
    }

    const productCategory = await prisma.product_Category.create({
      data: {
        id_category,
        id_product,
      },
    });

    return productCategory;
  }
}
