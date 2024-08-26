import { Router } from 'express';
import TransactionController from '../../controllers/Transaction';
const TransactionRoutes = new Router();

TransactionRoutes.post('/', TransactionController.scanItem);

export default TransactionRoutes;
