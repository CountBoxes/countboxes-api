import CreateLoadService from '../services/Load/CreateLoadService';
import FindLoadsService from '../services/Load/FindLoadsService';
import UpdateLoadService from '../services/Load/UpdateLoadService';
import { CreateLoadSchema } from '../validations/Load/CreateLoad';
import { UpdateLoadSchema } from '../validations/Load/UpdateLoad';

class LoadController {
  async create(req, res) {
    try {
      const data = await CreateLoadSchema.validate(req.body);

      const load = await CreateLoadService.execute(data);

      return res.status(201).send(load);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ error: true, description: error.message });
    }
  }

  async get(req, res) {
    const loads = await FindLoadsService.execute();

    return res.status(200).send(loads);
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      const data = await UpdateLoadSchema.validate(req.body);

      const load = await UpdateLoadService.execute(id, data);

      return res.status(200).send(load);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ error: true, description: error.message });
    }
  }
}
export default new LoadController();
