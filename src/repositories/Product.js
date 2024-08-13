import { prisma } from '../../prisma/client'

class ProductRepository {
    async create(data) {
        const product = await prisma.product.create({
            data,
        })

        return product
    }

    async getById(id) {

        const productId = Number(id)

        if (isNaN(productId)) {
            throw new Error('O Id do produto deve ser um número.');
        }
        const product = await prisma.product.findUnique({
            where: { id: productId },
        })
        return product
    }

    async getAll() {
        const products = await prisma.product.findMany({})

        return products
    }

    async update(id, data) {
        const updatedProduct = await prisma.product.update({
            where: { id: id },
            data: {
                description: data.description,
                cuttingTypeId: data.cuttingTypeId,
                grammage: data.grammage,
                grossWeight: data.grossWeight,
                netWeight: data.netWeight,
                productCode: data.productCode,
            }
        })
        return updatedProduct;
    }

}

export default new ProductRepository()