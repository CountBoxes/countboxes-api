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
}



export default new LoadRepository();