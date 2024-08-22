import CreateOrderService from '../services/Order/CreateOrderService';
import { CreateOrderSchema } from '../validations/Order/CreateOrder';
import { UpdateOrderSchema } from '../validations/Order/UpdateOrder';
import FindOrderssService from '../services/Order/FindOrdersService';
import UpdateOrderService from '../services/Order/UpdateOrderService';

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

  async update(req, res) {
    try {
      const { id } = req.params;

      const data = await UpdateOrderSchema.validate(req.body);

      const order = await UpdateOrderService.execute(id, data);

      return res.status(200).send(order);
    } catch (error) {
      return res.status(400).json({ error: error.message });

    }

  }


}
export default new OrderController();