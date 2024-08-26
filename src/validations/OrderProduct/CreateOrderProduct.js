import * as yup from 'yup';

export const CreateOrderProductSchema = yup.object({
  quantity: yup
    .number()
    .required('A quantidade é obrigatória.'),

  productCode: yup
    .number()
    .required('O código do produto é obrigatório.'),

  orderCode: yup
    .number()
    .required('O código da ordem é obrigatório.')

});
