import OrderRepository from '../../repositories/Order';
import ClientRepository from '../../repositories/Client';

class CreateOrderService {
  async execute(data) {
    const clientAlreadyExists = await ClientRepository.getById(data.clientCode);
    if (!clientAlreadyExists) {
      throw new Error('Cliente não encontrado.');
    }

    const order = await OrderRepository.create(data);

    return order;
  }
}

export default new CreateOrderService();
