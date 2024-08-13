import * as yup from 'yup'


export const UpdateProductSchema = yup.object({
    description:
        yup.string()
            .optional(),

    cuttingType:
        yup.string()
            .optional(),

    grammage:
        yup.number()
            .optional(),

    grossWeight:
        yup.number()
            .optional(),

    netWeight:
        yup.number()
            .optional(),

    productCode:
        yup.number()
            .optional(),
})
