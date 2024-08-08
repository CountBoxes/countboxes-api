import { createUser, getByEmail } from "../../repositories/User";

class CreateUserService {
  async execute(data) {
    const emailAlreadyExists = getByEmail(data.email);

    if (emailAlreadyExists) {
      throw new Error("Email already exists");
    }

    const user = await createUser(data);

    return user;
  }
}

export default new CreateUserService();
