import { Router } from "express";
import { create, listAll, listById } from "./controllers/movieController";

const routes = Router()

routes.post('/movies', create)
routes.get('/movies', listAll)
routes.get('/movies/:id', listById)

export default routes