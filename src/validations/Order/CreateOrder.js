import * as yup from 'yup'

export const CreateOrderSchema = yup.object({

    shipping: yup
        .number()
        .required('O frete é obrigatório.'),

    adress: yup
        .string()
        .required('O endereço é obrigatório.'),

    clientCode: yup
        .number()
        .required('O código do cliente é obrigatório.'),

})
