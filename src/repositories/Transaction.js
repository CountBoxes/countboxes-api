import { prisma } from '../../prisma/client';

class TransactionRepository {
  async countTransactions({ orderCode, orderProductCode, transactionCategory }) {
    return prisma.transaction.count({
      where: {
        orderCode: orderCode,
        orderProductCode: orderProductCode,
        transactionCategory: transactionCategory,
      },
    });
  }
  async createTransaction({ orderCode, orderProductCode, userCode, loadCode, transactionCategory, productCode }) {
    if (!productCode) {
      throw new Error('productCode não pode ser undefined ou null');
    }

    return prisma.transaction.create({
      data: {
        orderCode,
        orderProductCode,
        userCode,
        loadCode,
        transactionCategory,
        productCode,
      },
    });
  }
  async getByLoadCode(loadCode) {
    return prisma.transaction.findMany({
      where: {
        loadCode: parseInt(loadCode),
      },
    });
  }
}



export default new TransactionRepository();
