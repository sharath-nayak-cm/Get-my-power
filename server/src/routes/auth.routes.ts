import express, { RequestHandler } from "express";
import { userLogin, userRegister } from "../controllers/AuthController";


const router = express.Router()

router.post('/login', userLogin as RequestHandler);

router.post('/register', userRegister as RequestHandler);

export default router