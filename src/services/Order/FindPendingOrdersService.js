import OrderRepository from '../../repositories/Order';

class FindPendingOrdersService {
  async execute() {
    const orders = await OrderRepository.findPendings();

    return orders;
  }
}

export default new FindPendingOrdersService();
