import { Router } from 'express';
import TransactionController from '../../controllers/Transaction';
const TransactionRoutes = new Router();

TransactionRoutes.post('/', TransactionController.scanItem);

TransactionRoutes.get('/load/:loadCode', TransactionController.getTransactionsByLoadCode);

TransactionRoutes.get('/order/:orderCode', TransactionController.getTransactionsByOrderCode);

export default TransactionRoutes;
