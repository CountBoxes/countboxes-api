import CreateOrderService from '../services/Order/CreateOrderService';
import { CreateOrderSchema } from '../validations/Order/CreateOrderSchema';

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

    // async get(req, res) {
    //     const clients = await FindClientsService.execute();

    //     return res.status(200).send(clients);
    // }


}
export default new OrderController();