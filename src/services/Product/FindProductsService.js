import ProductRepository from '../../repositories/Product'

class FindProductsService {
    async execute() {

        const products = await ProductRepository.getAll()

        return products
    }
}

export default new FindProductsService()
