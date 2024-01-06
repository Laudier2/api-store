import { Request, Response } from "express";
import { prisma } from "../../../prisma_Client_Orm/prismaClient"; 

export class ControllerOfertasUpdate {
  async handle(request: Request, response: Response) {
    const { 
      id,
      ofertas
    } = request.body;


    if(typeof id === "undefined"){
      return response.status(400).json({
        msg: `O id: ${id === undefined ? "Você não inserio nem um id!" : id} não existe, ou não esta vinculado a nem um usuário, tente outro!`
      })
    } 

    if(
      ofertas
    ){
      return response.status(501).json({
        msg: `Lembre-se que, todos os campos tem que estar em string ok!`
      })
    }  

    if(
      ofertas
    ){
      return response.status(500).json({
        msg: `Algum campo esta faltando!`
      })
    }   

    const OfertasUpdate = await prisma.ofertas.update({
      where: {
        id: id,
      },
      data: {
        ofertas
      }
    })
    
    return response.status(201).json(OfertasUpdate)
  }
}
