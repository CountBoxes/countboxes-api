import * as yup from 'yup'

const phoneRegex = /^\+?[1-9]\d{1,14}$/

export const UpdateUserSchema = yup.object({
    name: yup.string(),
    phone: yup.string().matches(phoneRegex, 'Número de telefone inválido').optional(),
    type: yup.string(),
    active: yup
        .boolean(),
    email: yup.string().email('Email inválido'),
    password: yup.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'As senhas devem coincidir'),
});
