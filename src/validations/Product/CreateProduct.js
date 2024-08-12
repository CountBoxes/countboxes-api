import * as yup from 'yup'

export const CreateProductSchema = yup.object({
    description:
        yup.string()
            .optional(),

    cuttingType:
        yup.string()
            .transform(value => value.toLowerCase())
            .oneOf(['lisa', 'ondulada'], 'Tipo de Corte inválido'),
    grammage:
        yup.number()
            .required('Gramatura é obrigatória'),

    grossWeight:
        yup.number()
            .required('Peso Bruto é obrigatório'),

    netWeight:
        yup.number()
            .required('Peso Líquido é obrigatório'),
})