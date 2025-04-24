import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loading from './common/Loading';

interface ProtectedRouteProps {
  children: React.ReactNode;
  role?: 'admin' | 'teacher' | 'parent';
}

const ProtectedRoute = ({ children, role }: ProtectedRouteProps) => {
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

  return <>{children}</>;
};

export default ProtectedRoute;