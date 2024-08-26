import OrderRepository from '../../repositories/Order';

class CreateOrderService {
  async execute(data) {

    const order = await OrderRepository.create(data);

    return order;
  }
}

export default new CreateOrderService();
