import { prisma } from '../../prisma/client'

class ProductRepository {
    async create(data) {
        const productData = {
            ...data,
            cuttingType: {
                connect: { id: data.cuttingType }
            }
        };
    
        const product = await prisma.product.create({
            data: productData,
        });
        return product
    }

    async getByProductCode(productCode) {
        const product = await prisma.product.findUnique({
            where: { productCode: productCode },
        })
        return product !== null
    }

    async getAll() {
        const products = await prisma.product.findMany({})

        return products
    }

    async update(id, data) {
        const existingProduct = await prisma.product.findUnique({
            where: { id: parseInt(id) }
        });
    
        if (!existingProduct) {
            throw new Error('Produto não encontrado.');
        }
    
        const productData = {
            description: data.description,
            cuttingType: data.cuttingTypeId ? { connect: { id: data.cuttingTypeId } } : undefined,
            grammage: data.grammage,
            grossWeight: data.grossWeight,
            netWeight: data.netWeight,
        };
    
        if (data.productCode !== existingProduct.productCode) {
            productData.productCode = data.productCode;
        }
    
        const updatedProduct = await prisma.product.update({
            where: { id: parseInt(id) },
            data: productData,
        });
    
        return updatedProduct;
    }

    async getById(id) {
        const product = await prisma.product.findUnique({
            where: { id: parseInt(id) },
        })
        return product
    }
}

export default new ProductRepository()