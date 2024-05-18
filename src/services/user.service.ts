import * as userRepository from '../repository';

const registerUser = async (userData) => {
  // Add business logic here (e.g., hashing the password, sending a verification email)
  return await userRepository.createUser(userData);
};

const getUserProfile = async (id) => {
  return await userRepository.getUserById(id);
};

const updateUserProfile = async (id, userData) => {
  return await userRepository.updateUser(id, userData);
};

const removeUser = async (id) => {
  return await userRepository.deleteUser(id);
};
export { registerUser, getUserProfile, updateUserProfile, removeUser };
