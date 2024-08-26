import { prisma } from '../../prisma/client';

class OrderProductRepository {
  async create(data) {
    const orderProduct = await prisma.orderProduct.create({
      data,
    });
    return orderProduct;
  }

  async getByOrderCode(orderCode) {
    const orderProducts = await prisma.orderProduct.findMany({
      where: { orderCode: parseInt(orderCode) },
    });
    return orderProducts;
  }

  async findOrderProductByProductCode(orderCode, productCode) {
    return prisma.orderProduct.findFirst({
      where: {
        orderCode: orderCode,
        productCode: productCode,
      },
    });
  }

  async getByProductCodeAndOrderCode(orderCode, productCode) {
    const orderProduct = await prisma.orderProduct.findFirst({
      where: {
        orderCode: parseInt(orderCode),
        productCode: parseInt(productCode)
      },
    });

    return !!orderProduct;
  }



  //   async update(id, data) {
  //     const existingOrder = await prisma.order.findUnique({
  //       where: { orderCode: parseInt(id) }
  //     });

  //     if (!existingOrder) {
  //       throw new Error('Ordem não encontrada.');
  //     }

  //     const orderData = {
  //       shipping: data.shipping,
  //       adress: data.adress,
  //       status: data.status
  //     };

  //     // if (data.productCode !== existingProduct.productCode) {
  //     //     productData.productCode = data.productCode;
  //     // }

  //     const updatedOrder = await prisma.order.update({
  //       where: { orderCode: parseInt(id) },
  //       data: orderData,
  //     });

  //     return updatedOrder;
  //   }


}



export default new OrderProductRepository();