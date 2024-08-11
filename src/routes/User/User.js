import { Router } from 'express'
import UserController from '../../controllers/User'

const userRoutes = new Router()

userRoutes.post('/', UserController.create)

userRoutes.get('/', UserController.getAll)

export default userRoutes
