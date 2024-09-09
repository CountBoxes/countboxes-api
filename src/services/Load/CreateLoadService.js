import LoadRepository from '../../repositories/Load';

class CreateLoadService {
  async execute(data) {
    const load = await LoadRepository.create(data);
    return load;
  }
}

export default new CreateLoadService();
