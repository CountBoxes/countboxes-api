import { Router } from 'express'
import VehicleController from '../../controllers/Vehicle'

const vehicleRoutes = new Router()

vehicleRoutes.post('/', VehicleController.create)

vehicleRoutes.get('/', VehicleController.get)

vehicleRoutes.put('/:id', VehicleController.update)

export default vehicleRoutes
