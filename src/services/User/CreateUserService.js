import UserRepository from '../../repositories/User'

class CreateUserService {
    async execute(data) {
        const emailAlreadyExists = UserRepository.getByEmail(data.email)
        if (emailAlreadyExists) {
            throw new Error('Email already exists')
        }

        const cpfAlreadyExists = UserRepository.getByCPF(data.cpf)
        if (cpfAlreadyExists) {
            throw new Error('CPF already exists')
        }

        const user = await UserRepository.create(data)

        return user
    }
}

export default new CreateUserService()
