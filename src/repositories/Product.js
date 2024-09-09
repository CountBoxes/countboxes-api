import { prisma } from '../../prisma/client';

class ProductRepository {
  async create(data) {
    const product = await prisma.product.create({
      data,
    });
    return product;
  }

  async getByProductCode(productCode) {
    const product = await prisma.product.findUnique({
      where: { productCode: productCode },
    });
    return product !== null;
  }

  async getAll() {
    const products = await prisma.product.findMany({});

    return products;
  }

  async update(id, data) {
    const existingProduct = await prisma.product.findUnique({
      where: { productCode: id },
    });

    if (!existingProduct) {
      throw new Error('Produto não encontrado.');
    }

    const productData = {
      description: data.description,
      // cuttingType: data.cuttingTypeId ? { connect: { id: data.cuttingTypeId } } : undefined,
      grossWeight: data.grossWeight,
      netWeight: data.netWeight,
    };

    if (data.productCode !== existingProduct.productCode) {
      productData.productCode = data.productCode;
    }

    const updatedProduct = await prisma.product.update({
      where: { productCode: id },
      data: productData,
    });

    return updatedProduct;
  }

  async getById(id) {
    const product = await prisma.product.findUnique({
      where: { productCode: id },
    });
    return product;
  }
}

export default new ProductRepository();
