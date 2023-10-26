import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { config } from "dotenv";
import cors from "cors";
import { router } from "./routes/routes";
import { AppError } from "./err/AppErros";
import mercadopago from "mercadopago"

const port = process.env.PORT || 3005

const app = express();

mercadopago.configure({
    access_token: "APP_USR-260945821071771-022100-dee3aecc56701815dd9c5590103eddd4-349702513",
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(router);
app.use(config);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: `Intenal server error - ${err.message} --- provalvelmente algum campo não foi preechido corretamente! Verifica e tente novamente.`
    })

})

app.listen(port, () => console.log(`Server na URL ${port}`));

export { app }
