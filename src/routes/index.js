import { Router } from 'express'
import userRoutes from './User/User'
import productRoutes from './Product/Product'

const routes = new Router()

routes.use('/user', userRoutes)

routes.use('/product', productRoutes)

export default routes
