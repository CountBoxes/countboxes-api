import { prisma } from '../../prisma/client'

class ProductRepository {
    async create(data) {
        const product = await prisma.product.create({
            data,
        })

        return product
    }
}

export default new ProductRepository()