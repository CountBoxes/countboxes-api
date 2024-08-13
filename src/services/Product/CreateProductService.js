import ProductRepository from '../../repositories/Product'

class CreateProductService {
    async execute(id, data) {

        const productCodeAlreadyExists = await ProductRepository.getById(id)

        if (productCodeAlreadyExists) {
            throw new Error('O produto já existe')
        }

        const product = await ProductRepository.create(data)

        return product
    }
}

export default new CreateProductService()
