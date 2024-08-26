import CreateLoadService from '../services/Load/CreateLoadService';
import { CreateLoadSchema } from '../validations/Load/CreateLoad';


class LoadController {
  async create(req, res) {
    try {
      const data = await CreateLoadSchema.validate(req.body);

      const load = await CreateLoadService.execute(data);

      return res.status(201).send(load);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
export default new LoadController();