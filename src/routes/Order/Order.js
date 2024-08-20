import { Router } from 'express';
import OrderController from '../../controllers/Order';
const orderRoutes = new Router();

orderRoutes.post('/', OrderController.create);

// clientRoutes.get('/', ClientController.get);

// clientRoutes.put('/:id', ClientController.update)

export default orderRoutes;
