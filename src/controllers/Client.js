import CreateClientService from '../services/Client/CreateClientService';
import { CreateClientSchema } from '../validations/Client/CreateClient';


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

}
export default new ClientController();