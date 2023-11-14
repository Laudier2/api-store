import { Request, Response } from "express";
import { UpdateAdress } from "./UpdateAdress";

export class UpdateAdressUser {
  async handle(request: Request, response: Response) {
    const { 
      id,
      apartment_or_house,
      street,
      city,
      cep,
      state,
      number,
      district,
     } = request.body;

    const updateUserCase = new UpdateAdress()

    const result = await updateUserCase.execute({
      id,
      apartment_or_house,
      street,
      city,
      cep,
      state,
      number,
      district,
    })

    return response.status(201).json(result)
  }
}
