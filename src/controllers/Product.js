import CreateProductService from "../services/Product/CreateProductService";
import UpdateProductService from "../services/Product/UpdateProductService";
import FindProductsService from "../services/Product/FindProductsService";
import { CreateProductSchema } from '../validations/Product/CreateProduct'
import { UpdateProductSchema } from "../validations/Product/UpdateProduct";

class ProductController {
    async create(req, res) {
        try {
            const data = await CreateProductSchema.validate(req.body)

            const product = await CreateProductService.execute(data)

            return res.status(201).send(product)
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