import * as yup from 'yup'

export const UpdateVehicleSchema = yup.object({

    model: yup
        .string(),

    type: yup
        .string()

});