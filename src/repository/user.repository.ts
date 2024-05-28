import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

const registerUser = async (payload: User) => {
  return await prisma.user.create({
    data: payload
  });
};

const getUserById = async (id) => {
  return await prisma.user.findUnique({ where: { id } });
};

const getUserByEmail = async (email) => {
  return await prisma.user.findUnique({ where: { email } });
};

const updateUser = async (id, data) => {
  return await prisma.user.update({ where: { id }, data });
};

const deleteUser = async (id) => {
  return await prisma.user.delete({ where: { id } });
};

export { registerUser, getUserById, getUserByEmail, updateUser, deleteUser };
