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
      slug
    } = request.body;

    const createUserCase = new CreateProduct()

    const result = await createUserCase.execute({
      name,
      price,
      bar_code,
      size,
      color,
      description,
      image,
      quantity,
      slug
    })

    return response.status(200).json(result);
  }
}
