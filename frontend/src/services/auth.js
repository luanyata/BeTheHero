import { TOKEN } from "../utils/storage-key";
import jwt from "jsonwebtoken";

export const isAuthenticated = () => {
  const token = localStorage.getItem(TOKEN);
  if (!token) {
    return false;
  }

  const currentTime = new Date().getTime() / 1000;

  return currentTime <= jwt.decode(token).exp;
};

export const getToken = () => localStorage.getItem(TOKEN);

export const login = token => {
  localStorage.setItem(TOKEN, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN);
};
