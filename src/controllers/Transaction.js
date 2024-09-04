import FindTransactionByLoadCodeService from '../services/Transaction/FindTransactionByLoadCodeService';
import FindTransactionByOrderCodeService from '../services/Transaction/FindTransactionByOrderCodeService ';
import TransactionService from '../services/Transaction/TransactionService';
import { CreateTransactionSchema } from '../validations/Transaction/Transaction';

class TransactionController {
  async scanItem(req, res) {
    try {
      const data = await CreateTransactionSchema.validate(req.body);

      const result = await TransactionService.scanItem(data);

      return res.status(200).json(result);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ error: true, description: error.message });
    }
  }

  async getTransactionsByLoadCode(req, res) {
    try {
      const { loadCode } = req.params;

      const transactions =
        await FindTransactionByLoadCodeService.execute(loadCode);

      return res.status(200).json(transactions);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ error: true, description: error.message });
    }
  }

  async getTransactionsByOrderCode(req, res) {
    try {
      const { orderCode } = req.params;

      const transactions =
        await FindTransactionByOrderCodeService.execute(orderCode);

      return res.status(200).json(transactions);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ error: true, description: error.message });
    }
  }
}

export default new TransactionController();
