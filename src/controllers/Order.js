import CreateOrderService from '../services/Order/CreateOrderService';
import { CreateOrderSchema } from '../validations/Order/CreateOrder';
import { UpdateOrderSchema } from '../validations/Order/UpdateOrder';
import FindOrdersService from '../services/Order/FindOrdersService';
import UpdateOrderService from '../services/Order/UpdateOrderService';
import FindPendingOrdersService from '../services/Order/FindPendingOrdersService';
import FindLoadedOrdersService from '../services/Order/FindLoadedOrdersService';
import FindByIdOrderService from '../services/Order/FindByIdOrderService';

class OrderController {
  async create(req, res) {
    try {
      const data = await CreateOrderSchema.validate(req.body);

      const order = await CreateOrderService.execute(data);

      return res.status(201).send(order);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ error: true, description: error.message });
    }
  }

  async get(req, res) {
    const orders = await FindOrdersService.execute();

    return res.status(200).send(orders);
  }

  async findById(req, res) {
    const { id } = req.params;

    const orders = await FindByIdOrderService.execute(id);

    return res.status(200).send(orders);
  }

  async open(req, res) {
    try {
      const data = await FindPendingOrdersService.execute();

      return res.status(200).json(data);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ error: true, description: error.message });
    }
  }

  async load(req, res) {
    try {
      const data = await FindLoadedOrdersService.execute();

      return res.status(200).json(data);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ error: true, description: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      const data = await UpdateOrderSchema.validate(req.body);

      const order = await UpdateOrderService.execute(id, data);

      return res.status(200).send(order);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ error: true, description: error.message });
    }
  }
}
export default new OrderController();
