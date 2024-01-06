import { Request, Response } from "express";
import { prisma } from "../../../prisma_Client_Orm/prismaClient"; 

export class ControllerPromocaoUpdate {
  async handle(request: Request, response: Response) {
    const { 
      id,
      promocao
    } = request.body;


    if(typeof id === "undefined"){
      return response.status(400).json({
        msg: `O id: ${id === undefined ? "Você não inserio nem um id!" : id} não existe, ou não esta vinculado a nem um usuário, tente outro!`
      })
    } 

    if(
      promocao
    ){
      return response.status(501).json({
        msg: `Lembre-se que, todos os campos tem que estar em string ok!`
      })
    }  

    if(
      promocao
    ){
      return response.status(500).json({
        msg: `Algum campo esta faltando!`
      })
    }   

    const PromocaoUpdate = await prisma.promocao.update({
      where: {
        id: id,
      },
      data: {
        promocao
      }
    })
    
    return response.status(201).json(PromocaoUpdate)
  }
}
