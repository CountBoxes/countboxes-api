import OrderProductRepository from '../../repositories/OrderProduct';

class GetByIdOrderProductService {
  async execute(orderProjectCodeId) {
    const orderProjectCode =
      await OrderProductRepository.getByIdOrderProduct(orderProjectCodeId);

    return orderProjectCode;
  }
}

export default new GetByIdOrderProductService();
