import { Request, Response } from "express";
import { CreateAdress } from "./CreateAdress";

export class CreateAdressUser {
  async handle(request: Request, response: Response) {
    const { 
      apartment_or_house,
      street,
      city,
      cep,
      state,
      number,
      district, } = request.body;

    const createUserCase = new CreateAdress()

    const result = await createUserCase.execute({
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
