import { ErrorBadRequest } from '../../errors/customErros';
import OrderRepository from '../../repositories/Order';

class FindByIdOrder {
  async execute(orderId) {
    const order = await OrderRepository.getById(orderId);
    if (!order) throw new ErrorBadRequest('Ordem não encontrada');

    return order;
  }
}

export default new FindByIdOrder();
