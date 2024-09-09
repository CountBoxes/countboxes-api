import UserRepository from '../../repositories/User';
import bcrypt from 'bcrypt';
import validateCPF from '../../utils/validateCPF';

class CreateUserService {
  async execute(data) {

    const emailAlreadyExists = await UserRepository.getByEmail(data.email);

    if (emailAlreadyExists) {
      const error = new Error('Esse email já está cadastrado.');
      error.status = 400;
      throw error;
    }

    const hashedPassword = bcrypt.hashSync(data.password, 10);
    const { confirmPassword , ...userData } = data;


    const user = await UserRepository.create({
      ...userData,
      password: hashedPassword,
    });

    return user;
  }
}

export default new CreateUserService();
