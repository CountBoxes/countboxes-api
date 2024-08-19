import { Router } from 'express';
import userRoutes from './User/User';
import productRoutes from './Product/Product';
import clientRoutes from './Client/Client';
import vehicleRoutes from './Vehicle/Vehicle';

const routes = new Router();

routes.use('/users', userRoutes);

routes.use('/products', productRoutes);

routes.use('/clients', clientRoutes);

routes.use('/vehicles', vehicleRoutes);

export default routes;
