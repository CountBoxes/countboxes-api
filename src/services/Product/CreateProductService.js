import ProductRepository from '../../repositories/Product'

class CreateUserService {
    async execute(data) {

        console.log("blabla")
        const product = await ProductRepository.create(data)

        return product
    }
}

export default new CreateUserService()
