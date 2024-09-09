import OrderRepository from '../../repositories/Order';

class FindOrderByIdService {
  async execute(id) {

    const orders = await OrderRepository.getById(id);

    return orders;
  }
}

export default new FindOrderByIdService();
