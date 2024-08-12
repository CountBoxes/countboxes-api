import { CreateUserSchema } from '../validations/User/CreateUser'
import CreateUserService from '../services/User/CreateUserService'
import FindUsersService from '../services/User/FindUsersService'
import UpdateUserService from '../services/User/UpdateUserService'

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

    async update(req, res) {
        try {
            const { id } = req.params;
            const data = req.body

            const user = await UpdateUserService.execute(id, data)

            return res.status(200).send(user)
        } catch(error) {
            return res.status(400).json({ error: error.message })

        }

    }
}

export default new UserController()
