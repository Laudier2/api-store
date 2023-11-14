import { Request, Response } from "express";
import { FindAdress } from "./FindAdress ";

export class FindAdressUser {
  async handle(request: Request, response: Response) {
    const {  
      apartment_or_house,
      street,
      city,
      cep,
      state,
      number,
      district, 
    } = request.body;

    const createUserCase = new FindAdress()

    const result = await createUserCase.execute({
      apartment_or_house,
      street,
      city,
      cep,
      state,
      number,
      district,
    })

    return response.status(200).json(result)
  }
}
