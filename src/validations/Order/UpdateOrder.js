import * as yup from 'yup'

export const UpdateOrderSchema = yup.object({

    shipping: yup
        .number("O frete deve ser um número"),

    adress: yup
        .string("O endereço deve ser uma string"),

    clientCode: yup
        .number("O código do cliente deve ser um número"),

})
