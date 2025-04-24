import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    try {
      if (storedUser && storedUser !== 'undefined') {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Failed to parse stored user:', error);
      localStorage.removeItem('user');
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:8000/api/users/login',
        { email, password },
        { withCredentials: true }
      );
  
      const { user } = response.data;
  
      // Ensure the backend actually returned a valid user
      if (!user || !user.email) {
        throw new Error('Invalid response from server. Please try again.');
      }
  
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Login error:', error);
      const errorMsg =
        error.response?.data?.message || 'Invalid email or password';
      throw new Error(errorMsg); // This will be caught in the Login.jsx
    } finally {
      setLoading(false);
    }
  };
  
  const register = async (email, password, username) => {
    setLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:8000/api/users/signup',
        { email, password, username },
        { withCredentials: true }
      );
      const { user } = response.data;
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Registration failed';
      throw new Error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        register,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
