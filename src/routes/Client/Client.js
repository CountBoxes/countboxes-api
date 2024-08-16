import { Router } from 'express'

const clientRoutes = new Router()

clientRoutes.post('/', ClientController.create)

clientRoutes.get('/', ClientController.get)

clientRoutes.put('/:id', ClientController.update)

export default clientRoutes
