import { createUser, getAll, getUserByCPF } from '../repositories/User'
import { CreateUserSchema } from '../validations/User/CreateUser'
import { CreateUserService } from '../services/User/CreateUserService'

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
}

export default new UserController()
