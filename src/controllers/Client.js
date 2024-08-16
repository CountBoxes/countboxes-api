import CreateClientService from '../services/Client/CreateClientService';
import { CreateClientSchema } from '../validations/Client/CreateClient';
import FindClientsService from '../services/Client/FindClientsService';


class ClientController {
    async create(req, res) {
        try {
            const data = await CreateClientSchema.validate(req.body)

            const client = await CreateClientService.execute(data)

            return res.status(201).send(client)
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }

    async get(req, res) {
        const clients = await FindClientsService.execute()

        return res.status(200).send(clients)
    }


}
export default new ClientController();