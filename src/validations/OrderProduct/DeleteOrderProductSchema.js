import * as Yup from 'yup';

// Esquema de validação com Yup para o orderProductCode
export const DeleteOrderProductSchema = Yup.object().shape({
  orderProductCode: Yup
  .number()
  .required('O código do produto deste pedido é obrigatório')
  .positive('O código do produto deste pedido deve ser um número positivo')
  .integer('O código do produto deste pedido deve ser um número inteiro'),
});