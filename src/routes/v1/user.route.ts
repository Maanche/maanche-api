import express from 'express';
import { registerUser, getUserProfile, updateUserProfile, removeUser } from '../../controllers';

const userRouter = express.Router();

userRouter.post('/', registerUser);
userRouter.get('/:id', getUserProfile);
userRouter.put('/:id', updateUserProfile);
userRouter.delete('/:id', removeUser);

export { userRouter };
