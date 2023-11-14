import { Request, Response } from "express";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { AppError } from "../../err/AppErros";
import { prisma } from "../../prisma_Client_Orm/prismaClient";

export class ControllerLogin {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    console.log(email, password)

    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    const message = { errr: "E-mail ou senha invalida" }

    if (!user) {
      throw new AppError(message.errr)
    }

    const verifyPass = await bcrypt.compare(password, user.password)

    if (!verifyPass) {
      throw new AppError(message.errr);
    }

    const token = jwt.sign({ id: user.id }, process.env.APP_KEY ?? '', {
      expiresIn: '8h'
    })

    const { password: _, ...userLogin } = user
    const msg = { msg: "O token é valido por até 8 horas!" }

    try {
      return response.json({
        user: userLogin,
        token: token,
        msg: msg,
      })
    } catch (error) {
      return message.errr
    }

  }
}
