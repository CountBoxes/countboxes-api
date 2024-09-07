import { Router } from 'express';
import OrderController from '../../controllers/Order';
import authMiddleware from '../../utils/authMiddleware';

const orderRoutes = new Router();

orderRoutes.post('/', authMiddleware, OrderController.create);

orderRoutes.get('/', authMiddleware, OrderController.get);

orderRoutes.get('/:id', authMiddleware, OrderController.getById);

orderRoutes.put('/:id', OrderController.update);

export default orderRoutes;
