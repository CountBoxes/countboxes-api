import { prisma } from '../../prisma/client';

class VehicleRepository {
    async create(data) {

        const vehicle = await prisma.vehicle.create({
            data
        });
        return vehicle;
    }

    async getByPlate(plate) {
        const vehicle = await prisma.vehicle.findUnique({
            where: { plate: plate },
        });
        return vehicle !== null;
    }

    async getById(id) {
        const vehicle = await prisma.vehicle.findUnique({
            where: { vehicleCode: parseInt(id) },
        });
        return vehicle !== null;
    }


    async getAll() {
        const vehicles = await prisma.vehicle.findMany({});

        return vehicles;
    }

    async update(id, data) {
        const updatedVehicle = await prisma.vehicle.update({
            where: { vehicleCode: parseInt(id) },
            data: {
                model: data.model,
                type: data.type,
                active: data.active
            }
        });
        return updatedVehicle;
    }

}

export default new VehicleRepository();