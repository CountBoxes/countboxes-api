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

  async getByOrderProductCode(orderProductCode) {
    const orderProducts = await prisma.orderProduct.findMany({
      where: { orderProductCode: parseInt(orderProductCode) },
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

  

  async update(orderProductCode, data) {
    const existingOrderProduct = await prisma.orderProduct.findUnique({
      where: { orderProductCode: parseInt(orderProductCode) }
    });

    if (!existingOrderProduct) {
      throw new Error('Produto não encontrado.');
    }

    const orderProductData = {
      quantity: data.quantity,
      productCode: data.productCode,
      orderCode: data.orderCode
    };

    // if (data.productCode !== existingProduct.productCode) {
    //     productData.productCode = data.productCode;
    // }

    const updatedOrderProduct = await prisma.orderProduct.update({
      where: { orderProductCode: parseInt(orderProductCode) },
      data: orderProductData,
    });

    return updatedOrderProduct;
  }

  async delete(orderProductCode) {
    return await prisma.orderProduct.delete({
      where: { orderProductCode : parseInt(orderProductCode) },
    });
  }

}



export default new OrderProductRepository();