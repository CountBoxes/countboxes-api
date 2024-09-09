import TransactionRepository from '../../repositories/Transaction';
import OrderProductRepository from '../../repositories/OrderProduct';
import LoadRepository from '../../repositories/Load';

class TransactionService {
  async scanItem({ orderCode, productCode, userCode, loadCode, transactionCategory }) {
    const load = await LoadRepository.findLoadByCode(loadCode);
    if (!load) {
      const error = new Error('Carga não encontrada para o código fornecido.');
      error.status = 400;
      throw error;
    }

    const orderProduct = await OrderProductRepository.findOrderProductByProductCode(orderCode, productCode);
    if (!orderProduct) {
      const error = new Error('Produto não encontrado na ordem de pedido.');
      error.status = 400;
      throw error;
    }

    const orderProductCode = orderProduct.orderProductCode;
    const maxQuantity = orderProduct.quantity;

    const loadedQuantity = await this.getLoadedQuantity(orderCode, orderProductCode, 'CARREGAMENTO');
    const unloadedQuantity = await this.getLoadedQuantity(orderCode, orderProductCode, 'DESCARREGAMENTO');
    let currentBalance = loadedQuantity - unloadedQuantity;

    if (transactionCategory === 'DESCARREGAMENTO') {
      if (currentBalance <= 0) {
        const error = new Error('Não há itens suficientes para descarregar.');
        error.status = 400;
        throw error;
      }
      currentBalance -= 1;

      if (unloadedQuantity + 1 > loadedQuantity) {
        const error = new Error('Não é possível descarregar mais itens do que foram carregados.');
        error.status = 400;
        throw error;
      }
    } else if (transactionCategory === 'CARREGAMENTO') {
      if (currentBalance >= maxQuantity) {
        throw new Error('Todos os itens desse produto já foram carregados.');
      }
      currentBalance += 1;

      if (loadedQuantity + 1 > maxQuantity) {
        const error = new Error('Carregamento excede a quantidade total permitida para esse produto.');
        error.status = 400;
        throw error;
      }
    }

    const transaction = await TransactionRepository.createTransaction({
      orderCode,
      orderProductCode,
      productCode,
      userCode,
      loadCode,
      transactionCategory,
    });

    return { transaction, loadedQuantity: loadedQuantity + (transactionCategory === 'CARREGAMENTO' ? 1 : 0), unloadedQuantity: unloadedQuantity + (transactionCategory === 'DESCARREGAMENTO' ? 1 : 0), currentBalance };
  }

  async getLoadedQuantity(orderCode, orderProductCode, transactionCategory) {
    return await TransactionRepository.countTransactions({
      orderCode,
      orderProductCode,
      transactionCategory,
    });
  }
}


export default new TransactionService();
