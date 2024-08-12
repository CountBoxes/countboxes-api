import Product from "../repositories/Product";
import CreateProductService from "../services/Product/CreateProductService";
import FindProductsService from "../services/Product/FindProductsService";
import { CreateProductSchema } from '../validations/Product/CreateProduct'



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

}
export default new ProductController();