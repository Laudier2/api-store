import { Request, Response } from "express";
import { CreateUser } from "./CreateUsers";

export class ControllerCreate {
  async handle(request: Request, response: Response) {
    const { name, email, password, home, phone, city, cep, street, image, state, number } = request.body;

    const createUserCase = new CreateUser()

    const result = await createUserCase.execute({
      name, email, password, home, phone, city, cep, street, image, state, number
    })

    return response.status(201).json(result)
  }
}
