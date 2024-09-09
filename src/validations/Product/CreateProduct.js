import * as yup from 'yup';

export const CreateProductSchema = yup.object({
  productCode: yup.string().required('Código do Produto é obrigatório'),

  description: yup.string().optional(),

  grossWeight: yup.number().required('Peso Bruto é obrigatório'),

  netWeight: yup.number().required('Peso Líquido é obrigatório'),

  unit: yup.string().required('Unidade é obrigatório'),
});
