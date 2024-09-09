import ClientRepository from '../../repositories/Client';

class UpdateClientService {
  async execute(id, data) {
    const idAlreadyExists = await ClientRepository.getById(id);
    if (!idAlreadyExists) {
      throw new Error('Cliente não encontrado. Verifique se o id do cliente está correto.');
    }

    const client = await ClientRepository.update(id, data);

    return client;
  }
}

export default new UpdateClientService();
