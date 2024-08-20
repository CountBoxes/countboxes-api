import * as yup from 'yup'
import validatePlate from '../../utils/validatePlate'

export const CreateVehicleSchema = yup.object({
    plate: yup
        .string()
        .required('Placa é obrigatória')
        .test('validate-plate', 'Placa Inválida', value => validatePlate(value)),

    model: yup
        .string()
        .required('Modelo é obrigatório'),

    type: yup
        .string()
        .required('Tipo é obrigatório'),

});