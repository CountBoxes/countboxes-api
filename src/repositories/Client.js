import { prisma } from '../../prisma/client'

class ClientRepository {
    async create(data) {
        const client = await prisma.client.create({
            data,
        });
        return client
    }

    async get() {
        const clients = await prisma.client.findMany({})

        return clients
    }
}

export default new ClientRepository()