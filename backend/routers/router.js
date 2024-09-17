import { Router } from "express";
import { connectController } from "../controllers/connect.controller.js";
import { signUpController, loginController } from "../controllers/user.controller.js";

const Route = Router();

Route.post("/connect", connectController)
Route.post("/signup", signUpController)
Route.post("/login", loginController)


export default Route;