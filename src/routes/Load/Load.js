import { Router } from 'express';
import LoadController from '../../controllers/Load';
const loadRoutes = new Router();

loadRoutes.post('/', LoadController.create);

loadRoutes.get('/', LoadController.get);

export default loadRoutes;
