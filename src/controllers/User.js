import { createUser, getAll, getUserByCPF, getUserByEmail } from "../repositories/User";
import { userValidation } from "../validations/User";
export const create = async(req, res) => {
    try {
        await userValidation.validate(req.body);

        const existingUser = await getUserByCPF(req.body.cpf);
        if (existingUser) {
            return res.status(409).send({ message: 'CPF já está em uso.' });
        }

        const user = await createUser(req.body);
        res.status(200).send(user);
    } catch(err) {
        res.status(400).send(err);
    }
}

export const get = async(req,res) => {
    try {
        const users = await getAll();
        res.status(200).send(users);
    } catch(err) {
        res.status(400).send(err);
    }
}
