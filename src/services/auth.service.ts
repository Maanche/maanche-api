import httpStatus from 'http-status';
import ApiError from '../utils/ApiError';
import { prisma } from '../utils/prisma-client';
import { User } from '@prisma/client';

export const userRegistration = async ({
  email,
  password,
  fname,
  address,
  isVerified,
  lname,
  otp,
  phone_no
}: {
  email: string;
  password: string;
  fname: string;
  address: string;
  isVerified: boolean;
  lname: string;
  otp: string;
  phone_no: bigint;
}): Promise<User> => {
  try {
   /*  const userExists = await prisma.user.count({
      where: {
        email: email,
      },
    }); */
    
    const resData = await prisma.user.create({
      data: {
        email,
        password,
        fname,
        address,
        isVerified,
        lname,
        otp,
        phone_no
      }
    });
    return resData;
  } catch (error) {
    console.log(error)
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'errro while registering user');
  }
};
