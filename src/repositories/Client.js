import { prisma } from '../../prisma/client';

class ClientRepository {
  async create(data) {
    const client = await prisma.client.create({
      data,
    });
    return client;
  }

  async get() {
    const clients = await prisma.client.findMany({});

    return clients;
  }

  async getByCNPJ(CNPJ) {
    const client = await prisma.client.findUnique({
      where: {
        CNPJ: CNPJ,
      },
    });
    return client !== null;
  }

  async getById(id) {
    const client = await prisma.client.findUnique({
      where: { clientCode: parseInt(id) },
    });
    return client;
  }

  async update(id, data) {
    const existingClient = await prisma.client.findUnique({
      where: { clientCode: parseInt(id) }
    });

    if (!existingClient) {
      throw new Error('Cliente não encontrado.');
    }

    const clientData = {

      name: data.name,
      phone: data.phone,
      country: data.country,
      region: data.region,
      state: data.state,
      city: data.city,
      street: data.street,
      number: data.number,
      zipCode: data.zipCode,

    };

    // if (data.productCode !== existingProduct.productCode) {
    //   productData.productCode = data.productCode;
    // }

    const updatedClient = await prisma.client.update({
      where: { clientCode: parseInt(id) },
      data: clientData,
    });

    return updatedClient;
  }



}



export default new ClientRepository();