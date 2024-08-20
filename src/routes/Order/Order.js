import { Router } from 'express';
import OrderController from '../../controllers/Order';
const orderRoutes = new Router();

orderRoutes.post('/', OrderController.create);

orderRoutes.get('/', OrderController.get);

// clientRoutes.put('/:id', ClientController.update)

export default orderRoutes;
