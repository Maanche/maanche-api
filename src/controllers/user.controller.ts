import { User } from '@prisma/client';
import catchAsync from '../utils/catchAsync';
import { createUser } from '../services/user.service';

export const register = catchAsync(async (req, res, next) => {
  const users: User = req.body;
  const {
    address,
    createdAt,
    deletedAt,
    email,
    fname,
    id,
    image_url,
    isVerified,
    lname,
    otp,
    otp_verified_at,
    password,
    phone_no,
    updatedAt
  } = users;
  const userRegister = await createUser(
    email,
    fname,
    password,
    address,
    isVerified,
    lname,
    otp,
    phone_no
  );

});
