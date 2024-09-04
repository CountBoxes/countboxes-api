import { LoginUserSchema } from '../validations/User/LoginUser';
import AuthService from '../services/Auth/AuthService';

class AuthController {
  async login(req, res) {
    try {
      const data = await LoginUserSchema.validate(req.body);

      const response = await AuthService.execute(data);

      return res.status(200).json(response);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ error: true, description: error.message });
    }
  }
}

export default new AuthController();
