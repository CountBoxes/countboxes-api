import request from 'supertest';
import { jest } from '@jest/globals';
import app from '../../src/index';
import LoadRepository from '../../src/repositories/Load';
import OrderProductRepository from '../../src/repositories/OrderProduct';
import TransactionRepository from '../../src/repositories/Transaction';
import TransactionService from '../../src/services/Transaction/TransactionService';
describe('TransactionService - scanItem', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should successfully load an item when within limit', async () => {
    jest.spyOn(LoadRepository, 'findLoadByCode').mockResolvedValue({ loadCode: 1 });

    jest.spyOn(OrderProductRepository, 'findOrderProductByProductCode').mockResolvedValue({
      orderProductCode: 4,
      quantity: 10
    });

    jest.spyOn(TransactionRepository, 'createTransaction').mockResolvedValue({ id: 1 });

    const data = {
      orderCode: 1,
      productCode: '2020',
      userCode: 2,
      loadCode: 1,
      transactionCategory: 'CARREGAMENTO'
    };

    const scan = await request(app).post('/scan').send(data);

    expect(LoadRepository.findLoadByCode).toHaveBeenCalledWith(1);
    expect(OrderProductRepository.findOrderProductByProductCode).toHaveBeenCalledWith(1, '2020');

    expect(TransactionRepository.createTransaction).toHaveBeenCalledWith({
      orderCode: 1,
      productCode: '2020',
      userCode: 2,
      loadCode: 1,
      transactionCategory: 'CARREGAMENTO',
      orderProductCode: 4
    });

    expect(scan.status).toBe(200);
    expect(scan.body.transaction.id).toBe(1);
    expect(scan.body.loadedQuantity).toBe(1);
    expect(scan.body.unloadedQuantity).toBe(0);
    expect(scan.body.currentBalance).toBe(1);
  });

  it('should throw an error when the load is not found', async () => {
    jest.spyOn(LoadRepository, 'findLoadByCode').mockResolvedValue(null);

    const data = {
      orderCode: 1,
      productCode: '2020',
      userCode: 2,
      loadCode: 1,
      transactionCategory: 'CARREGAMENTO',
    };

    const response = await request(app)
      .post('/scan')
      .send(data);
    expect(response.status).toBe(400);
    expect(response.body.error).toBe(true);
    expect(response.body.description).toBe('Carga não encontrada para o código fornecido.');
  });

  it('should return error when the product is not found in the order', async () => {
    const mockLoad = { loadCode: 1 };

    jest.spyOn(LoadRepository, 'findLoadByCode').mockResolvedValue(mockLoad);
    jest.spyOn(OrderProductRepository, 'findOrderProductByProductCode').mockResolvedValue(null);

    const data = {
      orderCode: 1,
      productCode: '2020',
      userCode: 2,
      loadCode: 1,
      transactionCategory: 'CARREGAMENTO',
    };

    const response = await request(app)
      .post('/scan')
      .send(data);

    expect(response.status).toBe(400);
    expect(response.body.error).toBe(true);
    expect(response.body.description).toBe('Produto não encontrado na ordem de pedido.');
  });

  it('should return error when trying to load more than the allowed quantity', async () => {
    const mockLoad = { loadCode: 1 };
    const mockOrderProduct = { orderProductCode: 1, quantity: 5 };

    jest.spyOn(LoadRepository, 'findLoadByCode').mockResolvedValue(mockLoad);

    jest.spyOn(OrderProductRepository, 'findOrderProductByProductCode').mockResolvedValue(mockOrderProduct);

    jest.spyOn(TransactionService, 'getLoadedQuantity').mockResolvedValue(5);

    const data = {
      orderCode: 1,
      productCode: '2020',
      userCode: 2,
      loadCode: 1,
      transactionCategory: 'CARREGAMENTO',
    };

    const response = await request(app)
      .post('/scan')
      .send(data);

    expect(response.status).toBe(400);
    expect(response.body.error).toBe(true);
    expect(response.body.description).toBe('Carregamento excede a quantidade total permitida para esse produto.');
  });

  it('should return error when there is no balance to unload', async () => {
    const mockLoad = { loadCode: 1 };
    const mockOrderProduct = { orderProductCode: 1, quantity: 5 };

    jest.spyOn(LoadRepository, 'findLoadByCode').mockResolvedValue(mockLoad);

    jest.spyOn(OrderProductRepository, 'findOrderProductByProductCode').mockResolvedValue(mockOrderProduct);

    jest.spyOn(TransactionService, 'getLoadedQuantity').mockResolvedValue(0);

    const data = {
      orderCode: 1,
      productCode: '2020',
      userCode: 2,
      loadCode: 1,
      transactionCategory: 'DESCARREGAMENTO',
    };

    const response = await request(app)
      .post('/scan')
      .send(data);

    expect(response.status).toBe(400);
    expect(response.body.error).toBe(true);
    expect(response.body.description).toBe('Não há itens suficientes para descarregar.');
  });
});
