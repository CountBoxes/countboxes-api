import * as yup from 'yup';

const TransactionCategory = {
  CARREGAMENTO: 'CARREGAMENTO',
  DESCARREGAMENTO: 'DESCARREGAMENTO',
};

export const CreateTransactionSchema = yup.object({

  orderCode: yup
    .number()
    .required('O código do pedido é obrigatório.'),

  productCode: yup
    .number()
    .required('O código do produto do pedido é obrigatório.'),

  userCode: yup
    .number()
    .required('O código do usuário é obrigatório.'),

  // loadCode: yup
  //   .number()
  //   .required('O código de carga é obrigatório.'),

  transactionCategory: yup
    .string()
    .transform(value => value ? value.toUpperCase() : value)
    .oneOf(Object.values(TransactionCategory), 'Categoria de transação inválida.')
    .required('A categoria da transação é obrigatória.'),

});
