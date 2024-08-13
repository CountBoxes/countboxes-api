import UserRepository from '../../repositories/User'

class UpdateUserService {
    async execute(id, data) {
        const idAlreadyExists = await UserRepository.getById(id)
        // fix O idAlreadyExists, é pra retornar booleano, ta retornando o objeto.
        if (!idAlreadyExists) {
            throw new Error('Usuário não encontrado. Verifique se o ID está correto.')
        }

        const user = await UserRepository.update(id,data)

        return user
    }
}

export default new UpdateUserService()
