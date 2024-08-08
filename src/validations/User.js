import * as yup from "yup";

const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const phoneRegex = /^\+?[1-9]\d{1,14}$/;

export const userValidation = yup.object({
    name: yup.string().required('Nome é obrigatório'),
    phone: yup.string().matches(phoneRegex, 'Número de telefone inválido').optional(),
    cpf: yup.string()
        .matches(cpfRegex, 'CPF inválido')
        .required('CPF é obrigatório'),
    password: yup.string()
        .min(6, 'Senha deve ter pelo menos 6 caracteres')
        .required('Senha é obrigatória'),
});