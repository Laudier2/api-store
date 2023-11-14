import { Request, Response } from "express";
import { CreateUser } from "./CreateUsers";

export class ControllerCreate {
  async handle(request: Request, response: Response) {
    const { name, email, password, age, phone, access, image } = request.body;

    const createUserCase = new CreateUser()

    const result = await createUserCase.execute({
      name,    
      email,  
      age, 
      phone,   
      access, 
      password,
      image
    })

    return response.status(201).json(result)
  }
}
