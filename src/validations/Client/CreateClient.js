import * as yup from 'yup'
import validateCNPJ from '../../utils/validateCNPJ'

export const CreateClientSchema = yup.object({
    name: yup
        .string()
        .required(),

        CNPJ: yup
        .string()
        .required('CNPJ é obrigatório')
        .test('validate-cnpj', 'CNPJ inválido', value => validateCNPJ(value)),

    phone: yup
        .string()
        .required()
        .matches(/^[0-9]{11}$/),

    country: yup
        .string()
        .required(),

    region: yup
        .string()
        .required(),

    state: yup
        .string()
        .required(),

    city: yup
        .string()
        .required(),

    street: yup
        .string()
        .required(),

    number: yup
        .string()
        .required(),

    zipCode: yup
        .string()
        .required()
})
