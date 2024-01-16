import "express-async-errors";
import express from "express";
import 'dotenv/config'
import cors from "cors";
import { router } from "./routes/routes";

const port = process.env.APP_PORT || 3005

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(router);
app.listen(port, () => console.log(`Server na URL ${port}`));

export { app }
