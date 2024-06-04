import React, { createContext, useContext, useState } from 'react';
import users from "../data/usuarios.json"

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(0);


  const login = (email, senha) => {
    const foundUser = users.find(
      user => user.email === email && user.senha === senha
    );

    if (foundUser) {
      setUser(foundUser);
    }

    return foundUser;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);