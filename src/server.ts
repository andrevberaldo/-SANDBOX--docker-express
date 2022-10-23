import "express-async-errors";
import express from "express";
import { router } from "./routes";

const api = express();

// todo make error handling

api.use(express.json());
api.use(router);


api.listen(3000, () => console.log('server is running or port 3000'))