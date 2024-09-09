import { CreateOrderProductSchema } from '../validations/OrderProduct/CreateOrderProduct';
import CreateOrderProductService from '../services/OrderProduct/CreateOrderProductService';
import FindOrderProductsService from '../services/OrderProduct/FindOrderProductsService';
import UpdateOrderProductService from '../services/OrderProduct/UpdateOrderProductService';
import { UpdateOrderProductSchema } from '../validations/OrderProduct/UpdateOrderProduct';
import GetByIdOrderProductService from '../services/OrderProduct/GetByIdOrderProductService';
import { DeleteOrderProductSchema } from '../validations/OrderProduct/DeleteOrderProductSchema';
import DeleteOrderProductService from '../services/OrderProduct/DeleteOrderProductService';

class OrderProductController {
  async create(req, res) {
    try {
      const { productCode, orderCode } = req.body;

      const data = await CreateOrderProductSchema.validate(req.body);

      const orderProduct = await CreateOrderProductService.execute(
        productCode,
        orderCode,
        data,
      );

      return res.status(201).send(orderProduct);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ error: true, description: error.message });
    }
  }

  async get(req, res) {
    try {
      const { orderCode } = req.params;

      const orderProducts = await FindOrderProductsService.execute(orderCode);

      return res.status(200).send(orderProducts);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ error: true, description: error.message });
    }
  }

  async getById(req, res) {
    try {
      const { orderProductCode } = req.params;

      const orderProducts =
        await GetByIdOrderProductService.execute(orderProductCode);

      return res.status(200).send(orderProducts);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ error: true, description: error.message });
    }
  }

  async update(req, res) {
    try {
      const { orderProductCode } = req.params;

      const data = await UpdateOrderProductSchema.validate({
        ...req.body,
        orderProductCode,
      });

      const order = await UpdateOrderProductService.execute(
        orderProductCode,
        data,
      );

      return res.status(200).send(order);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ error: true, description: error.message });
    }
  }

  async delete(req, res) {
    try {
      // Captura o parâmetro orderProductCode da URL
      const { orderProductCode } = req.params;

      // Valida o parâmetro usando o esquema do Yup
      await DeleteOrderProductSchema.validate({ orderProductCode });

      // Chama o serviço de deleção passando o orderProductCode
      await DeleteOrderProductService.execute(orderProductCode);

      // Retorna uma resposta de sucesso sem conteúdo (204 No Content)
      return res.status(204).send();
    } catch (error) {
      // Em caso de erro de validação, retorna um status 400 (Bad Request) e a mensagem de erro
      if (error.name === 'ValidationError') {
        return res.status(400).json({ error: true, description: error.errors });
      }

      // Em caso de outros erros, retorna o status de erro e a mensagem apropriada
      return res
        .status(error.status || 500)
        .json({ error: true, description: error.message });
    }
  }
}
export default new OrderProductController();
