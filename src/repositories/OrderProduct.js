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

  async getByProductCodeAndOrderCode(orderCode, productCode) {
    const orderProducts = await prisma.orderProduct.findMany({
      where: {
        orderCode: parseInt(orderCode),
        productCode: parseInt(productCode)
      },
    });

    return orderProducts.length > 0;
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