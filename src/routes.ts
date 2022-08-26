import { Router } from "express";
import { create, listAll, listById, update } from "./controllers/movieController";

const routes = Router()

routes.post('/movies', create)
routes.get('/movies', listAll)
routes.get('/movies/:id', listById)
routes.put('/movies/:id', update)

export default routes