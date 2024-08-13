import { Router } from 'express'
import userRoutes from './User/User'
import productRoutes from './Product/Product'

const routes = new Router()

routes.use('/users', userRoutes)

routes.use('/products', productRoutes)

export default routes
