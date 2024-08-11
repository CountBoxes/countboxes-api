
export const create = async (req, res) => {
    try {
        const data = await productValidation.validate(req.body);

        const user = CreateUserService.execute(data);

        res.status(201).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
}