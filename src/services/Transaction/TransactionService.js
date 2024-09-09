import TransactionRepository from '../../repositories/Transaction';
import OrderProductRepository from '../../repositories/OrderProduct';
import LoadRepository from '../../repositories/Load';

class TransactionService {
  async scanItem({ orderCode, productCode, userCode, loadCode, transactionCategory }) {
    const load = await LoadRepository.findLoadByCode(loadCode);
    if (!load) {
      throw new Error('Carga não encontrada para o código fornecido.');
    }

    const orderProduct = await OrderProductRepository.findOrderProductByProductCode(orderCode, productCode);
    if (!orderProduct) {
      throw new Error('Produto não encontrado na ordem de pedido.');
    }

    const orderProductCode = orderProduct.orderProductCode;
    const maxQuantity = orderProduct.quantity;

    const loadedQuantity = await this.getLoadedQuantity(orderCode, orderProductCode, 'CARREGAMENTO');
    const unloadedQuantity = await this.getLoadedQuantity(orderCode, orderProductCode, 'DESCARREGAMENTO');
    let currentBalance = loadedQuantity - unloadedQuantity;

    if (transactionCategory === 'DESCARREGAMENTO') {
      if (currentBalance <= 0) {
        throw new Error('Não há itens suficientes para descarregar.');
      }
      currentBalance -= 1;

      if (unloadedQuantity + 1 > loadedQuantity) {
        throw new Error('Não é possível descarregar mais itens do que foram carregados.');
      }
    } else if (transactionCategory === 'CARREGAMENTO') {
      if (currentBalance >= maxQuantity) {
        throw new Error('Todos os itens desse produto já foram carregados.');
      }
      currentBalance += 1;

      if (loadedQuantity + 1 > maxQuantity) {
        throw new Error('Carregamento excede a quantidade total permitida para esse produto.');
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
