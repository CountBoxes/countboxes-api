import { prisma } from '../../prisma/client';

class TransactionRepository {
  async countTransactions({
    orderCode,
    orderProductCode,
    transactionCategory,
  }) {
    return prisma.transaction.count({
      where: {
        orderCode: orderCode,
        orderProductCode: orderProductCode,
        transactionCategory: transactionCategory,
      },
    });
  }
  async createTransaction({
    orderCode,
    orderProductCode,
    userCode,
    loadCode,
    transactionCategory,
    productCode,
  }) {
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
  async getByOrderCode(orderCode) {
    return prisma.transaction.findMany({
      where: {
        orderCode: parseInt(orderCode),
      },
    });
  }
}

export default new TransactionRepository();
