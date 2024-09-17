import { Router } from "express";
import { connectController } from "../controllers/connect.controller.js";

const Route = Router();

Route.post("/connect", connectController)

export default Route;