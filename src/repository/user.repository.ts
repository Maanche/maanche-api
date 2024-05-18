import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createUser = async (data) => {
  return await prisma.user.create({ data });
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

export { createUser, getUserById, getUserByEmail, updateUser, deleteUser };
