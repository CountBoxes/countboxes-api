import * as yup from 'yup'

export const CreateClientSchema = yup.object({

    name: yup
        .string().
        required(),

    CNPJ: yup
        .string()
        .required()
        .matches(/^[0-9]{14}$/),

    phone: yup
        .string()
        .required()
        .matches(/^[0-9]{11}$/),

})