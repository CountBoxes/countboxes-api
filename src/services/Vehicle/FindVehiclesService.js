import VehicleRepository from '../../repositories/Vehicle';

class FindVehiclesService {
  async execute() {

    const vehicles = await VehicleRepository.getAll();

    return vehicles;
  }
}

export default new FindVehiclesService();
