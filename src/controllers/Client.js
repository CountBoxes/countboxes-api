import CreateClientService from '../services/Client/CreateClientService';


class ClientController {
    async create(req, res) {
        try {
            const data = await CreateClient.validate(req.body)

            const client = await CreateClientService.execute(data)

            return res.status(201).send(client)
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }

    async getAll(req, res) {
        const products = await FindProductsService.execute()

        return res.status(200).send(products)
    }

    async update(req, res) {
        try {
            const { id } = req.params

            const data = await UpdateProductSchema.validate(req.body)

            const product = await UpdateProductService.execute(id, data)

            return res.status(200).send(product)
        } catch (error) {
            return res.status(400).json({ error: error.message })

        }

    }

}
export default new ProductController();