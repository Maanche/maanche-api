import { Request, Response } from 'express';
import * as userService from '../services';
import { User } from '.prisma/client';

const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, fname, lname, password } = req.body;
    const payload = {
      email,
      fname,
      lname,
      password
    } as User;

    const user = await userService.registerUser(payload);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const getUserProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserProfile(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const updateUserProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const user = await userService.updateUserProfile(id, userData);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const removeUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await userService.removeUser(id);
    res.status(204).send();
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export { registerUser, getUserProfile, updateUserProfile, removeUser };
