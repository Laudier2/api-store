import { Request, Response } from "express";
import { CreateUser } from "./CreateUsers";

export class ControllerCreate {
  async handle(request: Request, response: Response) {
    const { name, email, password, access, age, phone } = request.body;

    const createUserCase = new CreateUser()

    const result = await createUserCase.execute({
      name,
      phone,
      age,
      access,
      email, 
      password
    })

    return response.status(201).json(result)
  }
}
