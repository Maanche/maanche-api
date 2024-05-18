import { User } from '@prisma/client';
import catchAsync from '../utils/catchAsync';
import { userRegistration } from '../services/auth.service';

const register = catchAsync(async (req, res, next) => {
  const users: User = req.body;
   const {
    address,
    email,
    fname,
    /* id,
    image_url, */
    isVerified,
    lname,
    otp,
    /* otp_verified_at, */
    password,
    phone_no,
    
  } = users;

  const registerUser = await userRegistration({
    email,
    password,
    fname,
    address,
    isVerified,
    lname,
    otp,
    phone_no})
   console.log(registerUser)
  return res.status(200).json({ msg: 'successfully create user' });
});

export { register };
