import { Router } from 'express'
import userRoutes from './User/User'

const routes = new Router()

routes.use('/user', userRoutes)

export default routes
