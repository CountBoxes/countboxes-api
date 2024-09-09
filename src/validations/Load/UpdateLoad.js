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

export const UpdateLoadSchema = yup.object({
    vehicleCode: yup
        .number(),
    status: yup
        .string()
        .transform(value => value ? value.toUpperCase() : value)
        .oneOf(Object.values(LoadStatus), 'Status da carga inválida.'),
    userCode: yup
        .number()
});
