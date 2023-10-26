import { Request, Response } from "express";
import { CreateProduct } from "./CreateProduct";

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const {
      name,
      price,
      bar_code,
      size,
      color,
      description,
      image,
      quantity,
      amount,
      slug
    } = request.body;

    const createProductCase = new CreateProduct()

    const result = await createProductCase.execute({
      name,
      price,
      bar_code,
      size,
      color,
      description,
      image,
      quantity,
      amount,
      slug
    })

    return response.status(200).json(result);
  }
}
