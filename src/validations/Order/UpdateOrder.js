import * as yup from 'yup';

const OrderStatus = {
  ABERTO: 'ABERTO',
  CARREGADO: 'CARREGADO',
  EM_TRANSITO: 'EM_TRANSITO',
  ENTREGUE: 'ENTREGUE',
  CANCELADO: 'CANCELADO',
  DEVOLVIDO: 'DEVOLVIDO',
};


export const UpdateOrderSchema = yup.object({

  shipping: yup
    .number('O frete deve ser um número'),

  adress: yup
    .string('O endereço deve ser uma string'),

  clientCode: yup
    .number('O código do cliente deve ser um número'),

  status: yup
    .string()
    .transform(value => value ? value.toUpperCase() : value)
    .oneOf(Object.values(OrderStatus), 'Status inválido.')
    .optional()


});
