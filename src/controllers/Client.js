import CreateClientService from '../services/Client/CreateClientService';
import UpdateClientService from '../services/Client/UpdateClientService';
import { CreateClientSchema } from '../validations/Client/CreateClient';
import { UpdateClientSchema } from '../validations/Client/UpdateClient';
import FindClientsService from '../services/Client/FindClientsService';

class ClientController {
  async create(req, res) {
    try {
      const data = await CreateClientSchema.validate(req.body);

      const client = await CreateClientService.execute(data);

      return res.status(201).send(client);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ error: true, description: error.message });
    }
  }

  async get(req, res) {
    const clients = await FindClientsService.execute();

    return res.status(200).send(clients);
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const data = await UpdateClientSchema.validate(req.body);

      const client = await UpdateClientService.execute(id, data);

      return res.status(200).send(client);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ error: true, description: error.message });
    }
  }
}
export default new ClientController();
