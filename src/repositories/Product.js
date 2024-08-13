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
        // Primeiro, buscar o produto existente pelo ID
        const existingProduct = await prisma.product.findUnique({
            where: { id: parseInt(id) }
        });
    
        if (!existingProduct) {
            throw new Error('Produto não encontrado.');
        }
    
        // Criar o objeto de dados de atualização
        const productData = {
            description: data.description,
            cuttingType: data.cuttingTypeId ? { connect: { id: data.cuttingTypeId } } : undefined,
            grammage: data.grammage,
            grossWeight: data.grossWeight,
            netWeight: data.netWeight,
        };
    
        // Apenas incluir o productCode no objeto de atualização se ele for diferente do existente
        if (data.productCode !== existingProduct.productCode) {
            productData.productCode = data.productCode;
        }
    
        // Realizar a atualização
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