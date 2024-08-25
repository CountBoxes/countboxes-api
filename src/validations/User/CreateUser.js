import * as yup from 'yup';
import validateCPF from '../../utils/validateCPF';

const phoneRegex = /^\+?[1-9]\d{1,14}$/;

export const CreateUserSchema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  cpf: yup
    .string()
    .required('CPF é obrigatório')
    .test('validate-cpf', 'CPF inválido', value => validateCPF(value)),
  phone: yup
    .string()
    .matches(phoneRegex, 'Número de telefone inválido')
    .optional(),
  type: yup
    .string()
    .required('O campo type é obrigatório.'),
  active: yup
    .boolean()
    .default(true), // Define o valor padrão como true (equivalente a 1)
  email: yup
    .string()
    .email('Email inválido')
    .required('Email é obrigatório.'),
  password: yup
    .string()
    .min(6, 'Senha deve ter pelo menos 6 caracteres')
    .required('Senha é obrigatória'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas devem coincidir')
    .required('Confirmação de senha é obrigatória'),
});