import { prisma } from '../../prisma/client'

class ProductRepository {
    async create(data) {
        const product = await prisma.product.create({
            data,
        })

        return product
    }

    async getByProductCode(data) {
        const productCode = data.productCode;
        if (isNaN(productCode)) {
            throw new Error('O Código do produto deve ser um número.');
        }
        const product = await prisma.product.findUnique({
            where: { productCode: productCode },
        })
        return product
    }

    async getAll() {
        const products = await prisma.product.findMany({})

        return products
    }

}

export default new ProductRepository()