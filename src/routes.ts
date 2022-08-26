import { Router } from "express";
import { create } from "./controllers/movieController";

const routes = Router()

routes.post('/movies', create)

export default routes