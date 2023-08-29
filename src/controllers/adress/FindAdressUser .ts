import { Request, Response } from "express";
import { FindAdress } from "./FindAdress ";

export class FindAdressUser {
  async handle(request: Request, response: Response) {
    const { name, district, home, phone, city, cep, street, image, state, number } = request.body;

    const createUserCase = new FindAdress()

    const result = await createUserCase.execute({
      image, name, phone, state, city, district, cep, street, number, home,
    })

    return response.status(201).json(result)
  }
}
