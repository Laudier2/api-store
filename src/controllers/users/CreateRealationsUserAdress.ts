import { Request, Response } from "express";
import { RelationUserAdress } from "./CreateRelationUsAd";

export class ControllerRelationsUserAdress {
  async handle(request: Request, response: Response) {
    const { id_user, id_adress, id } = request.body;

    const createRelationnstCase = new RelationUserAdress();

    const result = await createRelationnstCase.execute({
      id,
      id_user,
      id_adress,

    });

    return response.json(result);
  }
}
