import { prisma } from '../../prisma/client';

class OrderRepository {
    async create(data) {
        const order = await prisma.order.create({
            data,
        });
        return order;
    }

}



export default new OrderRepository();