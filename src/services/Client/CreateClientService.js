import ClientRepository from '../../repositories/Client'

class CreateClientService {
    async execute(data) {
        const cnpjAlreadyExists = await ClientRepository.getByCNPJ(data.CNPJ);

        if (cnpjAlreadyExists) {
            throw new Error('Esse CNPJ já esta cadastrado.')
        }

        const client = await ClientRepository.create(data)
        return client
    }
}

export default new CreateClientService()
