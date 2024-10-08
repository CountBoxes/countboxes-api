import * as yup from 'yup';

const OrderStatus = {
  ABERTO: 'ABERTO',
  CARREGADO: 'CARREGADO',
  EM_TRANSITO: 'EM_TRANSITO',
  ENTREGUE: 'ENTREGUE',
  CANCELADO: 'CANCELADO',
  DEVOLVIDO: 'DEVOLVIDO',
};

export const CreateOrderSchema = yup.object({
  loadCode: yup
    .number()
    .required('O código da carga é obrigatório.'),

  shipping: yup
    .number()
    .required('O frete é obrigatório.'),

  address: yup
    .string()
    .required('O endereço é obrigatório.'),

  clientCode: yup
    .number()
    .required('O código do cliente é obrigatório.'),

  status: yup
    .string()
    .transform(value => value ? value.toUpperCase() : value)
    .oneOf(Object.values(OrderStatus), 'Status inválido.')
    .required('O status é obrigatório.')

});
