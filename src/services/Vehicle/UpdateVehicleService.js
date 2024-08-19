import VehicleRepository from '../../repositories/Vehicle';

class UpdateVehicleService {
    async execute(id, data) {
        const vehicleAlreadyExists = await VehicleRepository.getByPlate(id);
        // fix O idAlreadyExists, é pra retornar booleano, ta retornando o objeto.
        if (!vehicleAlreadyExists) {
            throw new Error('Veiculo não encontrado. Verifique se a placa está correta.');
        }

        const vehicle = await VehicleRepository.update(id, data);

        return vehicle;
    }
}

export default new UpdateVehicleService();
