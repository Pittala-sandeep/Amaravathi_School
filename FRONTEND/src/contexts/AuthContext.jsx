// src/contexts/AuthContext.js
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const ADMIN_ORIGIN = import.meta.env.VITE_ADMIN_ORIGIN;

  const checkAuth = async () => {
    try {
      const res = await axios.get(`${ADMIN_ORIGIN}/isauth`, {
        withCredentials: true,
      });
      if (res.data.isAuthenticated) {
        setIsAuthenticated(true);
        setUser(res.data.user);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (err) {
      console.error("Auth check failed", err);
      setIsAuthenticated(false);
      setUser(null);
    } finally {
    setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const logout = async () => {
    await axios.post(`${ADMIN_ORIGIN}/logout`, {}, { withCredentials: true });
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated, logout }}>
      {!loading && children} 
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
