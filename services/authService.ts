
import { User } from '../types';

const STORAGE_KEY_USER = 'skillpulse_current_user';
const STORAGE_KEY_DB = 'skillpulse_users_db';

export const getCurrentUser = (): User | null => {
  const user = localStorage.getItem(STORAGE_KEY_USER);
  return user ? JSON.parse(user) : null;
};

export const logout = () => {
  localStorage.removeItem(STORAGE_KEY_USER);
};

export const login = (email: string, password: string): User => {
  const users = JSON.parse(localStorage.getItem(STORAGE_KEY_DB) || '[]');
  const user = users.find((u: any) => u.email === email && u.password === password);
  
  if (!user) {
    throw new Error('Invalid email or password');
  }

  const { password: _, ...userWithoutPassword } = user;
  localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(userWithoutPassword));
  return userWithoutPassword;
};

export const signUp = (name: string, email: string, password: string): User => {
  const users = JSON.parse(localStorage.getItem(STORAGE_KEY_DB) || '[]');
  
  if (users.some((u: any) => u.email === email)) {
    throw new Error('Email already exists');
  }

  const newUser = { id: Math.random().toString(36).substr(2, 9), name, email, password };
  users.push(newUser);
  localStorage.setItem(STORAGE_KEY_DB, JSON.stringify(users));
  
  const { password: _, ...userWithoutPassword } = newUser;
  localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(userWithoutPassword));
  return userWithoutPassword;
};
