import OrderProductRepository from '../../repositories/OrderProduct';
import ProductRepository from '../../repositories/Product';
import OrderRepository from '../../repositories/Order';

class CreateOrderProductService {
  async execute(productCode, orderCode, data) {
    const [productCodeExists, orderCodeExists, productAlreadyExists] = await Promise.all([
      ProductRepository.getByProductCode(productCode),
      OrderRepository.getById(orderCode),
      OrderProductRepository.getByProductCodeAndOrderCode(orderCode, productCode),
    ]);

    if (!productCodeExists) {
      throw new Error('Código do produto não encontrado. Verifique se digitou o código do produto corretamente');
    }

    if (productAlreadyExists) {
      throw new Error('Produto já cadastrado na ordem');
    }

    if (!orderCodeExists) {
      throw new Error('Código da ordem não encontrado. Verifique se digitou o código da ordem corretamente');
    }

    const orderProduct = await OrderProductRepository.create(data);

    return orderProduct;
  }
}

export default new CreateOrderProductService();
