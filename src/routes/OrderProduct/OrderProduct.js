import { Router } from 'express';
import OrderProductController from '../../controllers/OrderProduct';
const orderProductRoutes = new Router();

orderProductRoutes.post('/', OrderProductController.create);

orderProductRoutes.get(
  '/getById/:orderProductCode',
  OrderProductController.getById,
);

orderProductRoutes.get('/:orderCode', OrderProductController.get);

orderProductRoutes.put('/:orderProductCode', OrderProductController.update);

orderProductRoutes.delete('/:orderProductCode', OrderProductController.delete)

export default orderProductRoutes;
