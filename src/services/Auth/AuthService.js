import UserRepository from '../../repositories/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET = process.env.SECRET;
class AuthService {
  async execute(data) {
    const user = await UserRepository.getByEmail(data.email);
    if (!user) {
      throw new Error('Usuário não encontrado.');
    }

    const isPasswordValid = bcrypt.compareSync(data.password, user.password);
    if (!isPasswordValid) {
      throw new Error('Senha inválida.');
    }

    const token = jwt.sign({ id: user.id, name: user.name }, SECRET, { expiresIn: '1h' });

    return { token, user: { id: user.id, name: user.name, email: user.email } };
  }
}

export default new AuthService();
