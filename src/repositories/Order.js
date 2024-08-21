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

    async getById(id) {
        const order = await prisma.order.findUnique({
            where: { orderCode: parseInt(id) },
        });
        return order;
    }


    async update(id, data) {
        const existingOrder = await prisma.order.findUnique({
            where: { orderCode: parseInt(id) }
        });

        if (!existingOrder) {
            throw new Error('Ordem não encontrada.');
        }

        const orderData = {
            shipping: data.shipping,
            adress: data.adress,
        };

        // if (data.productCode !== existingProduct.productCode) {
        //     productData.productCode = data.productCode;
        // }

        const updatedOrder = await prisma.order.update({
            where: { orderCode: parseInt(id) },
            data: orderData,
        });

        return updatedOrder;
    }


}



export default new OrderRepository();