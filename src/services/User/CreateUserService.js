import UserRepository from '../../repositories/User'

class CreateUserService {
    async execute(data) {

        const cpfAlreadyExists = await UserRepository.getByCPF(data.cpf)

        if (cpfAlreadyExists) {
            throw new Error('CPF already exists')
        }

        const user = await UserRepository.create(data)

        return user
    }
}

export default new CreateUserService()
