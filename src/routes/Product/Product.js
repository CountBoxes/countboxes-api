import { Router } from 'express';
import ProductController from '../../controllers/Product';

const productRoutes = new Router();

productRoutes.post('/', ProductController.create);

productRoutes.get('/', ProductController.getAll);

productRoutes.put('/:id', ProductController.update);

export default productRoutes;
