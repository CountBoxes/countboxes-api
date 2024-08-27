import TransactionRepository from '../../repositories/Transaction';

class FindTransactionByOrderCodeService {
    async execute(orderCode) {

        const transactions = await TransactionRepository.getByOrderCode(orderCode);

        return transactions;
    }
}

export default new FindTransactionByOrderCodeService();
