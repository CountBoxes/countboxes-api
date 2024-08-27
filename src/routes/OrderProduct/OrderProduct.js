import { Router } from 'express';
import OrderProductController from '../../controllers/OrderProduct';
const orderProductRoutes = new Router();

orderProductRoutes.post('/', OrderProductController.create);

orderProductRoutes.get('/:orderCode', OrderProductController.get);

orderProductRoutes.put('/:orderProductCode', OrderProductController.update)

export default orderProductRoutes;
