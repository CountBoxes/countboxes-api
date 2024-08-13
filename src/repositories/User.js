import { prisma } from '../../prisma/client'

class UserRepository {
    async create(data) {
        const user = await prisma.user.create({
            data,
        })

        return user
    }

    async getAll() {
        const users = await prisma.user.findMany({})

        return users
    }

    async getByCPF(cpf) {
        const user = await prisma.user.findUnique({
            where: {
                cpf: cpf,
            },
        })
        return user !== null
    }

    async getById(id) {
        const userId = Number(id);
        if (isNaN(userId)) {
            throw new Error('O ID deve ser um número.');
        }
        const user = await prisma.user.findUnique({
            where: { id: userId },
        })
        return user
    }

    async update(id, data) {
        const updatedUser = await prisma.user.update({
            where: { id: Number(id) },
            data: {
                name: data.name,
                phone: data.phone,
                type: data.type,
                status: data.status,
                password: data.password
            }
        })
        return updatedUser;
    }
}

export default new UserRepository()
