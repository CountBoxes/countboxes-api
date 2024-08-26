import * as yup from 'yup';
const LoadStatus = {
  PENDENTE: 'PENDENTE',
  AGENDADO: 'AGENDADO',
  CARREGANDO: 'CARREGANDO',
  CARREGADO: 'CARREGADO',
  EM_TRANSITO: 'EM_TRANSITO',
  ENTREGUE: 'ENTREGUE',
  CANCELADO: 'CANCELADO',
  RETORNADO: 'RETORNADO'
};

export const CreateLoadSchema = yup.object({
  vehicleCode: yup
    .number()
    .required(),
  status: yup
    .string()
    .transform(value => value ? value.toUpperCase() : value)
    .oneOf(Object.values(LoadStatus), 'Status da carga inválida.')
    .required('O status da carga é obrigatório.'),
  userCode: yup
    .number()
    .required()
});
