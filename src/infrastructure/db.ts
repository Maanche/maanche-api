import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const checkDatabaseConnection = async () => {
  try {
    await prisma.$connect();
    console.log('DB Connected ');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    await prisma.$disconnect();
  }
};

export { checkDatabaseConnection };
