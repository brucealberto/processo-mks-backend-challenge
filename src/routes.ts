import { Router } from 'express';
import {
  create,
  deleteMovie,
  listAll,
  listById,
  update,
} from './controllers/movieController';

const routes = Router();

routes.post('/movies', create);
routes.get('/movies', listAll);
routes.get('/movies/:id', listById);
routes.put('/movies/:id', update);
routes.delete('/movies/:id', deleteMovie);

export default routes;
