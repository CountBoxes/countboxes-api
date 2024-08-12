import * as yup from 'yup'

const phoneRegex = /^\+?[1-9]\d{1,14}$/

export const UpdateUserSchema = yup.object({
    name: yup.string().optional(),
    phone: yup
        .string()
        .matches(phoneRegex, 'Número de telefone inválido')
        .optional(),
    password: yup
        .string()
        .min(6, 'Senha deve ter pelo menos 6 caracteres')
        .optional(),
    type: yup
        .string()
        .optional(),
    status: yup
        .string()
        .optional()
})
