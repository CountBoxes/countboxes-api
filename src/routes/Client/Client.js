import { Router } from 'express';
import ClientController from '../../controllers/Client';
const clientRoutes = new Router();

clientRoutes.post('/', ClientController.create);

clientRoutes.get('/', ClientController.get);

clientRoutes.put('/:id', ClientController.update)

export default clientRoutes;
