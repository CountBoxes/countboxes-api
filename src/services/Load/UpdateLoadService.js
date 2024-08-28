import LoadRepository from '../../repositories/Load';

class UpdateOrderService {
    async execute(id, data) {
        const idAlreadyExists = await LoadRepository.getById(id);
        if (!idAlreadyExists) {
            throw new Error('Carga não encontrada. Verifique se o id está correto.');
        }

        const load = await LoadRepository.update(id, data);

        return load;
    }
}

export default new UpdateOrderService();
