import OrderRepository from '../../repositories/Order';

class FindOrdersService {
    async execute() {

        const orders = await OrderRepository.get();

        return orders;
    }
}

export default new FindOrdersService();
