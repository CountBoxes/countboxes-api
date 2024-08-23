import { Router } from 'express';
import userRoutes from './User/User';
import productRoutes from './Product/Product';
import clientRoutes from './Client/Client';
import vehicleRoutes from './Vehicle/Vehicle';
import orderRoutes from './Order/Order';
import orderProductRoutes from './OrderProduct/OrderProduct';

const routes = new Router();

routes.use('/users', userRoutes);

routes.use('/products', productRoutes);

routes.use('/clients', clientRoutes);

routes.use('/vehicles', vehicleRoutes);

routes.use('/orders', orderRoutes);

routes.use('/orders/products', orderProductRoutes);

export default routes;
