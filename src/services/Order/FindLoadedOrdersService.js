import OrderRepository from '../../repositories/Order';

class FindLoadedOrdersService {
  async execute() {
    const orders = await OrderRepository.findLoaded();

    return orders;
  }
}

export default new FindLoadedOrdersService();
