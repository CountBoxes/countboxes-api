import { CreateOrderProductSchema } from "../validations/OrderProduct/CreateOrderProduct";
import CreateOrderProductService from "../services/OrderProduct/CreateOrderProductService";
import FindOrderProductsService from "../services/OrderProduct/FindOrderProductsService";


class OrderProductController {
  async create(req, res) {
    try {

      const { productCode, orderCode } = req.body;

      const data = await CreateOrderProductSchema.validate(req.body);



      const orderProduct = await CreateOrderProductService.execute(productCode, orderCode, data);

      return res.status(201).send(orderProduct);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }


  async get(req, res) {
    try {
      const { orderCode } = req.params;

      const orderProducts = await FindOrderProductsService.execute(orderCode);

      return res.status(200).send(orderProducts);

    } catch (error) {

      return res.status(400).json({ error: error.message });

    }
  }

  // async update(req, res) {
  //   try {
  //     const { id } = req.params;

  //     const data = await UpdateOrderSchema.validate(req.body);

  //     const order = await UpdateOrderService.execute(id, data);

  //     return res.status(200).send(order);
  //   } catch (error) {
  //     return res.status(400).json({ error: error.message });

  //   }

  // }


}
export default new OrderProductController();