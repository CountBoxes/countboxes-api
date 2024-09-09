import VehicleRepository from '../../repositories/Vehicle';

class CreateVehicleService {
    async execute(data) {

        const plateAlreadyExists = await VehicleRepository.getByPlate(data.plate);

        if (plateAlreadyExists) {
            throw new Error('Um veículo com esta placa já está cadastrado.');
        }

        const vehicle = await VehicleRepository.create(data);

        return vehicle;
    }
}

export default new CreateVehicleService();
