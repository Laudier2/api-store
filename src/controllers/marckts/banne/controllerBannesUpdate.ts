import { Request, Response } from "express";
import { prisma } from "../../../prisma_Client_Orm/prismaClient"; 

export class ControllerBannerUpdate {
  async handle(request: Request, response: Response) {
    const { 
      id,
      bannes
    } = request.body;


    if(typeof id === "undefined"){
      return response.status(400).json({
        msg: `O id: ${id === undefined ? "Você não inserio nem um id!" : id} não existe, ou não esta vinculado a nem um usuário, tente outro!`
      })
    } 

    if(
      bannes
    ){
      return response.status(501).json({
        msg: `Lembre-se que, todos os campos tem que estar em string ok!`
      })
    }  

    if(
      bannes
    ){
      return response.status(500).json({
        msg: `Algum campo esta faltando!`
      })
    }   

    const BannesUpdate = await prisma.bannes.update({
      where: {
        id: id,
      },
      data: {
        bannes
      }
    })
    
    return response.status(201).json(BannesUpdate)
  }
}
