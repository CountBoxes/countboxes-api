import Product from "../repositories/Product";
import CreateProductService from "../services/Product/CreateProductService";
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

}
export default new ProductController();