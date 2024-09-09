import OrderProductRepository from '../../repositories/OrderProduct';

class FindOrderProductsService {
  async execute(orderCode) {
    const orderProducts =
      await OrderProductRepository.getByOrderCode(orderCode);

    return orderProducts;
  }
}

export default new FindOrderProductsService();
