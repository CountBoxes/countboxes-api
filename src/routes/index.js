import { Router } from 'express';
import userRoutes from './User/User';
import productRoutes from './Product/Product';
import clientRoutes from './Client/Client';
import vehicleRoutes from './Vehicle/Vehicle';
import orderRoutes from './Order/Order';
import orderProductRoutes from './OrderProduct/OrderProduct';
import authRoutes from '../routes/Auth/Auth';
import TransactionRoutes from './Transaction/Transaction';
import loadRoutes from './Load/Load';

const routes = new Router();

routes.use('/users', userRoutes);

routes.use('/products', productRoutes);

routes.use('/clients', clientRoutes);

routes.use('/vehicles', vehicleRoutes);

routes.use('/orders', orderRoutes);

routes.use('/orders/products', orderProductRoutes);

routes.use('/auth', authRoutes);

routes.use('/scan', TransactionRoutes);

routes.use('/load', loadRoutes);


export default routes;
