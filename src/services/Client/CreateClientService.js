import ClientRepository from '../../repositories/Client'

class CreateClientService {
    async execute(data) {
        const client = await ClientRepository.create(data)
        return client
    }
}

export default new CreateClientService()
