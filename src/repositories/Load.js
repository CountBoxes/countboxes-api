import { prisma } from '../../prisma/client';

class LoadRepository {
  async create(data) {
    const load = await prisma.load.create({
      data,
    });
    return load;
  }
  async findLoadByCode(loadCode) {
    return prisma.load.findUnique({
      where: {
        loadCode: parseInt(loadCode),
      },
    });
  }
  async get() {
    return prisma.load.findMany();
  }

  async getById(id) {
    const load = prisma.load.findUnique({
      where: {
        loadCode: parseInt(id),
      },
    });
    return load;

  }

  async update(id, data) {
    const existingLoad = await prisma.load.findUnique({
      where: { loadCode: parseInt(id) }
    });

    if (!existingLoad) {
      throw new Error('Carga não encontrada.');
    }

    const loadData = {
      vehicleCode: data.vehicleCode,
      status: data.status,
      userCode: data.userCode
    };

    const updatedLoad = await prisma.load.update({
      where: { loadCode: parseInt(id) },
      data: loadData,
    });

    return updatedLoad;
  }
}



export default new LoadRepository();