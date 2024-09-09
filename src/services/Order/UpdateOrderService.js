import OrderRepository from '../../repositories/Order';

class UpdateOrderService {
  async execute(id, data) {
    const idAlreadyExists = await OrderRepository.getById(id);
    if (!idAlreadyExists) {
      throw new Error(
        'Ordem de pedido não encontrada. Verifique se o id está correto.',
      );
    }

    const order = await OrderRepository.update(id, data);

    return order;
  }
}

export default new UpdateOrderService();
