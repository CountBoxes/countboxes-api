import prisma from "../../prisma/client";

export const createUser = async (data) => {
  const user = await prisma.user.create({
    data,
  });
  return user;
};

export const getAll = async () => {
  const users = await prisma.user.findMany({});
  return users;
};

export const getByEmail = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
};
