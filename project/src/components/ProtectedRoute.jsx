import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loading from './common/Loading';
import { useEffect } from 'react';

const ProtectedRoute = ({ children, role }) => {
  const { isAuthenticated, user, loading } = useAuth();

  

  if (loading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (role && user?.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;