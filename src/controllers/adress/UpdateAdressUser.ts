import { Request, Response } from "express";
import { UpdateAdress } from "./UpdateAdress";

export class UpdateAdressUser {
  async handle(request: Request, response: Response) {
    const { id, name, district, home, phone, city, cep, street, image, state, number } = request.body;

    const updateUserCase = new UpdateAdress()

    const result = await updateUserCase.execute({
      id, image, state, city, district, cep, street, number, home,
    })

    return response.status(201).json(result)
  }
}
