import UserRepository from '../../repositories/User';

class CreateUserService {
  async execute(data) {

    const emailAlreadyExists = await UserRepository.getByEmail(data.email);

    if (emailAlreadyExists) {
      throw new Error('Esse email já esta cadastrado.');
    }

    const user = await UserRepository.create(data);

    return user;
  }
}

export default new CreateUserService();
