import { prisma } from "../services/prisma";

export const createUser = async (data) => {
    const user = await prisma.user.create({
        data,
    });
    return user;
};

export const getAll = async () => {
    const users = await prisma.user.findMany({});
    return users;
}