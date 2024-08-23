import { Router } from 'express';
import OrderProductController from '../../controllers/OrderProduct';
const orderProductRoutes = new Router();

orderProductRoutes.post('/', OrderProductController.create);

orderProductRoutes.get('/:orderCode', OrderProductController.get);

// orderProductRoutes.put('/:id', OrderProductController.update)

export default orderProductRoutes;
