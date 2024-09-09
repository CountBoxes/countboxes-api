import ProductRepository from '../../repositories/Product';

class CreateProductService {
  async execute(data) {

    const productCodeAlreadyExists = await ProductRepository.getByProductCode(data.productCode);

    if (productCodeAlreadyExists) {
      throw new Error('O codigo do produto já está cadastrado.');
    }

    const product = await ProductRepository.create(data);

    return product;
  }
}

export default new CreateProductService();
