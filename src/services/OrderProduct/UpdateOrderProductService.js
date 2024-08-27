import OrderProductRepository from '../../repositories/OrderProduct';

class UpdateOrderProductService {
  async execute(orderProductCode, data) {

    const orderProductCodeAlreadyExists = await OrderProductRepository.getByOrderProductCode(orderProductCode);
    if (!orderProductCodeAlreadyExists) {
      throw new Error('Produto não encontrado. Verifique se o id está correto.');
    }

    const orderProduct = await OrderProductRepository.update(orderProductCode, data);

    return orderProduct;
  }
}

export default new UpdateOrderProductService();
