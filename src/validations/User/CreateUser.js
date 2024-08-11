import * as yup from 'yup'
import validateCPF from '../../utils/validateCPF';

const phoneRegex = /^\+?[1-9]\d{1,14}$/

export const CreateUserSchema = yup.object({
    name: yup.string().required('Nome é obrigatório'),
    phone: yup
        .string()
        .matches(phoneRegex, 'Número de telefone inválido')
        .optional(),
    cpf: yup
        .string()
        .required('CPF é obrigatório')
        .test('validate-cpf', 'CPF inválido', value => validateCPF(value)),
    password: yup
        .string()
        .min(6, 'Senha deve ter pelo menos 6 caracteres')
        .required('Senha é obrigatória'),
})
