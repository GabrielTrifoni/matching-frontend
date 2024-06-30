import React, { createContext, useContext, useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(0);
  const navigateTo = useNavigate()

  useEffect(() => {
    async function getUserDetails() {
      if(!token) return

      try {
        const response = await axios.get(`http://localhost:3000/users/details`, { 
          headers: {
            Authorization: `Bearer ${token}`
          } 
        })
        setUser(response.data)
      } catch (error) {
        localStorage.removeItem("token");
        navigateTo("/")
      }
    }

    getUserDetails()
  }, [token])

  const logout = () => {
    localStorage.removeItem("token")
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ token, setToken, user, logout }}>
      { children }
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);