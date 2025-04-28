import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, School } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout, user } = useAuth();

  // Define the navLinks array
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Admission', path: '/admission' },
    // Conditionally add the Admin link if the user is an admin
    ...(user?.role === 'admin' ? [{ name: 'Admin', path: '/admin' }] : []),
  ];

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const getAuthLinks = () => {
    if (isAuthenticated) {
      return (
        <>
          <div className="hidden md:block">
            <button 
              onClick={logout}
              className="text-gray-800 min-w-[100px] bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-md transition duration-300"
            >
              {user.email.slice(0, 4)}
            </button>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="block w-full text-left py-2 px-4 text-white hover:bg-indigo-700 rounded-md"
            >
              Logout
            </button>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="hidden md:block">
          <Link 
            to="/login" 
            className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md transition duration-300"
          >
            Login
          </Link>
        </div>
        <div className="md:hidden">
          <Link 
            to="/login" 
            className="block py-2 px-4 text-white hover:bg-indigo-700 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      </>
    );
  };

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <School className="h-10 w-10 text-indigo-600" />
              <span className="ml-2 text-2xl font-bold text-indigo-600">Little Learners</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {getAuthLinks()}
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-indigo-600"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'bg-indigo-700 text-white'
                    : 'text-white hover:bg-indigo-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {getAuthLinks()}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
