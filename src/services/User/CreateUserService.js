import UserRepository from '../../repositories/User';
import bcrypt from 'bcrypt';
class CreateUserService {
  async execute(data) {

    const emailAlreadyExists = await UserRepository.getByEmail(data.email);

    if (emailAlreadyExists) {
      throw new Error('Esse email já esta cadastrado.');
    }

    const hashedPassword = bcrypt.hashSync(data.password, 10);
    // eslint-disable-next-line no-unused-vars
    const { confirmPassword , ...userData } = data;

    const user = await UserRepository.create({
      ...userData,
      password: hashedPassword,
    });

    return user;
  }
}

export default new CreateUserService();
