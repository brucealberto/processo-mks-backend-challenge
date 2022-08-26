import { Router } from "express";
import { create, listAll } from "./controllers/movieController";

const routes = Router()

routes.post('/movies', create)
routes.get('/movies', listAll)

export default routes