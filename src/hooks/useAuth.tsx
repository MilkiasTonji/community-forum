import { useState, useEffect } from "react";
import { User } from "../types";

export const useAuth = () => {
  const [user, setUser] = useState<User|null>(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const _user: User = JSON.parse(loggedInUser);
      setUser(_user);
    }
  }, []);

  const login = (fullName: string, userName:string, password: string) => {
    const user: User = {fullName, userName, password}
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };

  const signup = (fullName: string, userName: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({ fullName, userName, password });
    localStorage.setItem("users", JSON.stringify(users));
    login(fullName, userName, password);
  };

  return { user, login, logout, signup };
};
