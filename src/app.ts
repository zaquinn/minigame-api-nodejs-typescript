import express from "express";
import { appRoutes } from "./routes";
import { errorMiddleware } from "./middlewares/error.middleware";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

appRoutes(app);

app.use(errorMiddleware);

app.listen(process.env.PORT || 3000);
