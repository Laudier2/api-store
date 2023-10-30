import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import { router } from "./routes/routes";
//import { AppError } from "./err/AppErros";

const port = process.env.PORT || 3005

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => console.log(`Server na URL ${port}`));

export { app }
