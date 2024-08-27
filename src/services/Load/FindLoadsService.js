import LoadRepository from '../../repositories/Load';

class FindLoadsService {
    async execute() {

        const loads = await LoadRepository.get();

        return loads;
    }
}

export default new FindLoadsService();
