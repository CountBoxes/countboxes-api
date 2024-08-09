import prisma from '../../prisma/client'

class UserController {
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

        return user
    }

    async getByEmail(email) {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        })

        return user
    }
}

export default new UserController()
