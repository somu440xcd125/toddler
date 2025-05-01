import { createContext, useState, useContext, useEffect,useCallback } from 'react';
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
  const [contacts, setContact] = useState([]);

  

 

  // useEffect to check if user is saved in localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    
    
    // If a user is found in localStorage, parse it and set the user state
    if (storedUser && storedUser !== 'undefined') {
      try {
        const parsedUser = JSON.parse(storedUser);
         // Check the user object
        setUser(parsedUser);
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem('user');
      }
    }
    setLoading(false); // After checking localStorage, stop loading
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://toddler-backend.onrender.com/api/users/login',

        // 'http://localhost:8000/api/users/login',
        { email, password },
        { withCredentials: true }
      );
  
      const { user } = response.data;
  
      // Ensure the backend actually returned a valid user
      if (!user || !user.email) {
        throw new Error('Invalid response from server. Please try again.');
      }
  
      setUser(user);  // Set the user after successful login
      localStorage.setItem('user', JSON.stringify(user)); // Save user in localStorage
    } catch (error) {
      console.error('Login error:', error);
      const errorMsg =
        error.response?.data?.message || 'Invalid email or password';
      throw new Error(errorMsg);
    } finally {
      setLoading(false);
    }
  };
  
  const register = async (email, password, username) => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://toddler-backend.onrender.com/api/users/signup',

        // 'http://localhost:8000/api/users/signup',
        { email, password, username },
        { withCredentials: true }
      );
      const { user } = response.data;
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user)); // Save user in localStorage
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Registration failed';
      throw new Error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const registerContact = async (name, whatsapp) => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://toddler-backend.onrender.com/api/users/registercontact',
        // 'http://localhost:8000/api/users/registercontact',
        { name, whatsapp },
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      console.error(error.response?.data?.message || error.message);
      throw new Error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const getContact = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://toddler-backend.onrender.com/api/users/getcontact',

        // 'http://localhost:8000/api/users/getcontact',
        { withCredentials: true }
      );
      setContact(response.data)
    } catch (error) {
      console.error(error.response?.data?.message || error.message);
      throw new Error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    getContact();
  }, [getContact]);

  const logout = () => {
    setUser(null); // Clear user from state
    localStorage.removeItem('user'); // Remove user from localStorage
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        contacts,
        login,
        logout,
        register,
        registerContact,
       
        setLoading,


        isAuthenticated: !!user, // If user exists, consider them authenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
