import { prisma } from '../../prisma/client';

class UserRepository {
  async create(data) {
    const user = await prisma.user.create({
      data,
    });

    return user;
  }

  async getAll() {
    const users = await prisma.user.findMany({});

    return users;
  }

  async getByEmail(email) {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return user !== null;
  }

  async getById(id) {
    const user = await prisma.user.findUnique({
      where: { userCode: parseInt(id) },
    });
    return user;
  }

  async update(id, data) {
    const updatedUser = await prisma.user.update({
      where: { userCode: Number(id) },
      data: {
        name: data.name,
        phone: data.phone,
        type: data.type,
        active: data.active,
        password: data.password,
        email: data.email
      }
    });
    return updatedUser;
  }
}

export default new UserRepository();
