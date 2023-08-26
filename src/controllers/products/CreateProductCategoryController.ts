import { Request, Response } from "express";
import { CreateProductCategoryRelation } from "./CreateProductCategoryRelation";

export class CreateProductCategoryController {
  async handle(request: Request, response: Response) {
    const { id_product, id_category } = request.body;

    const createProductCase = new CreateProductCategoryRelation();

    const result = await createProductCase.execute({

      id_category,
      id_product,

    });

    return response.json(result);
  }
}
