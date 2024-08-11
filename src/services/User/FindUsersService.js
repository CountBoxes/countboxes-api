import UserRepository from '../../repositories/User'

class FindUsersService {
    async execute() {

        const users = await UserRepository.getAll()

        return users
    }
}

export default new FindUsersService()
