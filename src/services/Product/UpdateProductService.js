import ProductRepository from '../../repositories/Product'

class UpdateProductService {
    async execute(id, data) {
        const idAlreadyExists = await ProductRepository.getById(id)

        if (!idAlreadyExists) {
            throw new Error('Produto não encontrado. Verifique se o id do produto está correto.')
        }

        const product = await ProductRepository.update(id, data)

        return product
    }
}

export default new UpdateProductService()
