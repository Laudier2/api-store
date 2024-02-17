import { Request, Response } from "express";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class ControllerCompraDelete {
  async handle(request: Request, response: Response) {
    const id = request.params.id;

    const idExists = await prisma.compra.findUnique({
      where: {
        id: id
      }
    })

    if(!idExists){
      return response.status(400).json({
        msg: `Esse id: ${id} não existe mais no database`
      })
    }  

    const compra = await prisma.compra.delete({     
        where: {
          id: id
        }
      })

    return response.json({msg: "Usuario deletado com sucesso!", compra});
  }
}
export class ControllerCompraDelete1 {
  async handle(request: Request, response: Response) {
    const id = request.params.id;

    const idExists = await prisma.compra1.findUnique({
      where: {
        id: id
      }
    })

    if(!idExists){
      return response.status(400).json({
        msg: `Esse id: ${id} não existe mais no database`
      })
    }  

    const compra1 = await prisma.compra1.delete({     
        where: {
          id: id
        }
      })

    return response.json({msg: "Usuario deletado com sucesso!", compra1});
  }
}
export class ControllerCompraDelete2 {
  async handle(request: Request, response: Response) {
    const id = request.params.id;

    const idExists = await prisma.compra2.findUnique({
      where: {
        id: id
      }
    })

    if(!idExists){
      return response.status(400).json({
        msg: `Esse id: ${id} não existe mais no database`
      })
    }  

    const compra2 = await prisma.compra2.delete({     
        where: {
          id: id
        }
      })

    return response.json({msg: "Usuario deletado com sucesso!", compra2});
  }
}
export class ControllerCompraDelete3 {
  async handle(request: Request, response: Response) {
    const id = request.params.id;

    const idExists = await prisma.compra3.findUnique({
      where: {
        id: id
      }
    })

    if(!idExists){
      return response.status(400).json({
        msg: `Esse id: ${id} não existe mais no database`
      })
    }  

    const compra3 = await prisma.compra3.delete({     
        where: {
          id: id
        }
      })

    return response.json({msg: "Usuario deletado com sucesso!", compra3});
  }
}
export class ControllerCompraDelete4 {
  async handle(request: Request, response: Response) {
    const id = request.params.id;

    const idExists = await prisma.compra4.findUnique({
      where: {
        id: id
      }
    })

    if(!idExists){
      return response.status(400).json({
        msg: `Esse id: ${id} não existe mais no database`
      })
    }  

    const compra4 = await prisma.compra4.delete({     
        where: {
          id: id
        }
      })

    return response.json({msg: "Usuario deletado com sucesso!", compra4});
  }
}

