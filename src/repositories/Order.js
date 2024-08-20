import { prisma } from '../../prisma/client';

class OrderRepository {
    async create(data) {
        const order = await prisma.order.create({
            data,
        });
        return order;
    }

    async get() {
        const orders = await prisma.order.findMany({});

        return orders;
    }

}



export default new OrderRepository();