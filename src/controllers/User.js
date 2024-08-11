import { CreateUserSchema } from '../validations/User/CreateUser'
import CreateUserService from '../services/User/CreateUserService'
import FindUsersService from '../services/User/FindUsersService'

class UserController {
    async create(req, res) {
        try {
            const data = await CreateUserSchema.validate(req.body)

            const user = await CreateUserService.execute(data)

            return res.status(200).send(user)
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }

    async getAll(req, res) {
        const users = await FindUsersService.execute()

        return res.status(200).send(users)
    }
}

export default new UserController()
