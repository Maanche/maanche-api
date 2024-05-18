import { Request, Response } from 'express';
import * as userService from '../services';

const registerUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const user = await userService.registerUser(userData);
    res.status(201).json(user);
  } catch (error) {
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
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUserProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const user = await userService.updateUserProfile(id, userData);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removeUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await userService.removeUser(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { registerUser, getUserProfile, updateUserProfile, removeUser };
