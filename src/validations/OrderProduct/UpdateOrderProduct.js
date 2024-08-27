import * as yup from 'yup';


export const UpdateOrderProductSchema = yup.object({
  quantity: yup
    .number(),

  productCode: yup
    .number(),

  orderCode: yup
    .number(),

  orderProductCode: yup
    .number()
});
