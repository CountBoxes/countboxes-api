import { prisma } from '../../prisma/client'

class ClientRepository {
    async create(data) {
        const client = await prisma.client.create({
            data,
        });
        return client
    }
}

export default new ClientRepository()