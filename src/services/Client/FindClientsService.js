import ClientRepository from '../../repositories/Client';

class FindClientsService {
  async execute() {

    const clients = await ClientRepository.get();

    return clients;
  }
}

export default new FindClientsService();
