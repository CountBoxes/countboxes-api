import TransactionRepository from '../../repositories/Transaction';

class FindTransactionByLoadCodeService {
    async execute(loadCode) {

        const transactions = await TransactionRepository.getByLoadCode(loadCode);

        return transactions;
    }
}

export default new FindTransactionByLoadCodeService();
