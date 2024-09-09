import { OrderStatus } from '@prisma/client';
import { prisma } from '../../prisma/client';

class OrderRepository {
  async create(data) {
    const order = await prisma.order.create({
      data,
    });
    return order;
  }

  async get() {
    const orders = await prisma.order.findMany({
      orderBy: {
        status: 'asc',
      },
    });

    return orders;
  }

  async getById(id) {
    const order = await prisma.order.findUnique({
      where: { orderCode: parseInt(id) },
      include: {
        client: true,
        load: true,
        OrderProduct: {
          include: {
            product: true,
            Transaction: true,
          },
        },
      },
    });

    return order;
  }

  async findPendings() {
    const orders = await prisma.order.findMany({
      where: {
        status: OrderStatus.ABERTO,
      },
    });

    return orders;
  }

  async update(id, data) {
    const existingOrder = await prisma.order.findUnique({
      where: { orderCode: parseInt(id) },
    });

    if (!existingOrder) {
      throw new Error('Ordem não encontrada.');
    }

    const orderData = {
      shipping: data.shipping,
      address: data.address,
      status: data.status,
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
