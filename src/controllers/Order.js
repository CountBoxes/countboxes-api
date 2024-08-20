import CreateOrderService from '../services/Order/CreateOrderService';
import { CreateOrderSchema } from '../validations/Order/CreateOrderSchema';
import FindOrderssService from '../services/Order/FindOrdersService';

class OrderController {
    async create(req, res) {
        try {
            const data = await CreateOrderSchema.validate(req.body);

            const order = await CreateOrderService.execute(data);

            return res.status(201).send(order);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }

    async get(req, res) {
        const orders = await FindOrderssService.execute();

        return res.status(200).send(orders);
    }


}
export default new OrderController();