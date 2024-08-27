import FindTransctionByLoadCodeService from '../services/Transaction/FindTransctionByLoadCodeService';
import TransactionService from '../services/Transaction/TransactionService';
import { CreateTransactionSchema } from '../validations/Transaction/Transaction';


class TransactionController {
  async scanItem(req, res) {
    try {
      const data = await CreateTransactionSchema.validate(req.body);

      const result = await TransactionService.scanItem(data);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getTransactionsByLoadCode(req, res) {
    try {
      const { loadCode } = req.params;

      const transactions = await FindTransctionByLoadCodeService.execute(loadCode);

      return res.status(200).json(transactions);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new TransactionController();