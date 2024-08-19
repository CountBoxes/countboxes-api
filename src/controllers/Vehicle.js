import { UpdateVehicleSchema } from '../validations/Vehicle/UpdateVehicle'
import { CreateVehicleSchema } from '../validations/Vehicle/CreateVehicle'
import CreateVehicleService from '../services/Vehicle/CreateVehicleService';
import FindVehiclesService from '../services/Vehicle/FindVehiclesService';
import UpdateVehicleService from '../services/Vehicle/UpdateVehicleService';

class VehicleController {
    async create(req, res) {
        try {
            const data = await CreateVehicleSchema.validate(req.body);

            const vehicle = await CreateVehicleService.execute(data);

            return res.status(201).send(vehicle);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async get(req, res) {
        const vehicles = await FindVehiclesService.execute();

        return res.status(200).send(vehicles);
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await UpdateVehicleSchema.validate(req.body);

            const vehicle = await UpdateVehicleService.execute(id, data);

            return res.status(200).send(vehicle);
        } catch (error) {
            return res.status(400).json({ error: error.message });

        }

    }


}
export default new VehicleController();