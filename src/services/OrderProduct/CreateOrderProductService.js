import OrderProductRepository from '../../repositories/OrderProduct';
import ProductRepository from '../../repositories/Product';
import OrderRepository from '../../repositories/Order';
import e from 'cors';

class CreateOrderProductService {
    async execute(productCode, orderCode, data) {

        const productCodeAlreadyExists = await ProductRepository.getByProductCode(productCode);
        if (!productCodeAlreadyExists) {
            throw new Error('Código do produto não encontrado. Verifique se digitou o código do produto corretamente');
        }

        const productAlreadyExists = await OrderProductRepository.getByProductCodeAndOrderCode(orderCode, productCode);

        console.log(productAlreadyExists);

        if (productAlreadyExists) {
            throw new Error('Produto já cadastrado na ordem');
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
