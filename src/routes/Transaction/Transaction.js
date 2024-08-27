import { Router } from 'express';
import TransactionController from '../../controllers/Transaction';
const TransactionRoutes = new Router();

TransactionRoutes.post('/', TransactionController.scanItem);

TransactionRoutes.get('/:loadCode', TransactionController.getTransactionsByLoadCode);

export default TransactionRoutes;
