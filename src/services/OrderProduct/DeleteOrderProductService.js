import OrderProductRepository from '../../repositories/OrderProduct';

class DeleteOrderProductService {
  async execute(orderProductCode) {
    // Verifica se o produto existe no banco de dados
    const orderProductExists = await OrderProductRepository.getByOrderProductCode(orderProductCode);
    if (!orderProductExists) {
      throw new Error('Produto não encontrado. Verifique se o id está correto.');
    }

    // Se o produto existe, realiza a deleção
    await OrderProductRepository.delete(orderProductCode);

    // Retorna uma mensagem de sucesso ou simplesmente nada (a depender da sua necessidade)
    return { message: 'Produto deletado com sucesso' };
  }
}

export default new DeleteOrderProductService();