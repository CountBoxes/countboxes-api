import * as yup from 'yup'

export const UpdateClientSchema = yup.object({

    name: yup
        .string(),

    phone: yup
        .string()
        .matches(/^[0-9]{11}$/),

    country: yup
        .string(),

    region: yup
        .string(),

    state: yup
        .string(),

    city: yup
        .string(),

    street: yup
        .string(),

    number: yup
        .string(),

    zipCode: yup
        .string()

})
