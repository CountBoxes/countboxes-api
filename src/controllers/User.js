import { CreateUserSchema } from '../validations/User/CreateUser';
import CreateUserService from '../services/User/CreateUserService';
import FindUsersService from '../services/User/FindUsersService';
import UpdateUserService from '../services/User/UpdateUserService';
import { UpdateUserSchema } from '../validations/User/UpdateUser';
class UserController {
  async create(req, res) {
    try {
      const data = await CreateUserSchema.validate(req.body);

      const user = await CreateUserService.execute(data);

      return res.status(200).send(user);
    } catch (error) {
      if (error.name === 'ValidationError') {
        return res
        .status(400)
        .json({ error: true, description: error.message });
      }
      return res
        .status(error.status || 500)
        .json({ error: true, description: error.message });
    }
  }

  async getAll(req, res) {
    const users = await FindUsersService.execute();

    return res.status(200).send(users);
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const data = await UpdateUserSchema.validate(req.body);

      const user = await UpdateUserService.execute(id, data);

      return res.status(200).send(user);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ error: true, description: error.message });
    }
  }
}

export default new UserController();
