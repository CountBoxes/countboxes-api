import OrderProductRepository from '../../repositories/OrderProduct';
import ProductRepository from '../../repositories/Product';
import OrderRepository from '../../repositories/Order';

class CreateOrderProductService {
    async execute(productCode, orderCode, data) {

        const productCodeAlreadyExists = await ProductRepository.getByProductCode(productCode);
        if (!productCodeAlreadyExists) {
            throw new Error('Código do produto não encontrado. Verifique se digitou o código do produto corretamente');
        }

        const orderCodeAlreadyExists = await OrderRepository.getById(orderCode);
        if (!orderCodeAlreadyExists) {
            throw new Error('Código da ordem não encontrado. Verifique se digitou o código da ordem corretamente');
        }


        const orderProduct = await OrderProductRepository.create(data);

        return orderProduct;
    }
}

export default new CreateOrderProductService();
