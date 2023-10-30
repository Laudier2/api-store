import { Request, Response } from "express";
import { FindAdress } from "./FindAdress ";

export class FindAdressUser {
  async handle(request: Request, response: Response) {
    const { district, home, city, cep, street, image, state, number, id} = request.body;

    const createUserCase = new FindAdress()

    const result = await createUserCase.execute({
      id, image, state, city, district, cep, street, number, home,
    })

    return response.status(201).json(result)
  }
}
