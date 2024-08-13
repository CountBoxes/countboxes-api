import * as yup from 'yup'

export const CreateProductSchema = yup.object({
    description:
        yup.string()
            .optional(),

    cuttingType:
        yup.number()
            .required('Tipo de corte é obrigatório'),

    grammage:
        yup.number()
            .required('Gramatura é obrigatória'),

    grossWeight:
        yup.number()
            .required('Peso Bruto é obrigatório'),

    netWeight:
        yup.number()
            .required('Peso Líquido é obrigatório'),

    productCode:
        yup.number()
            .required('Código do Produto é obrigatório'),
})