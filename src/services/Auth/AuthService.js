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
      throw new ErrorBadRequest('Usuário ou senha inválidos.');
    }

    const isPasswordValid = bcrypt.compareSync(data.password, user.password);
    if (!isPasswordValid) {
      throw new ErrorBadRequest('Usuário ou senha inválidos.');
    }

    const token = jwt.sign({ id: user.id, user }, SECRET, {
      expiresIn: '24h',
    });

    return { token };
  }
}

export default new AuthService();
