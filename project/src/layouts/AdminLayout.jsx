import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  School,
  Menu,
  X,
  LogOut,
  Users,
  UserCog,
  BarChart3,
  FileText,
  Image,
  MessageCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const SidebarItem = ({ icon: Icon, title, path, isActive }) => (
  <Link
    to={path}
    className={`flex items-center px-4 py-3 mb-2 rounded-lg transition-colors duration-200 ${
      isActive
        ? 'bg-indigo-700 text-white'
        : 'text-gray-300 hover:bg-indigo-800 hover:text-white'
    }`}
  >
    <Icon className="w-5 h-5 mr-3" />
    <span>{title}</span>
  </Link>
);

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarItems = [
    { icon: BarChart3, title: 'Dashboard', path: '/admin' },
    { icon: Users, title: 'Students', path: '/admin/students' },
    { icon: UserCog, title: 'Teachers', path: '/admin/teachers' },
    { icon: FileText, title: 'Admissions', path: '/admin/admissions' },
    { icon: Image, title: 'Gallery', path: '/admin/gallery' },
    { icon: MessageCircle, title: 'Messages', path: '/admin/messages' }
  ];

  const getCurrentPath = () => window.location.pathname;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for mobile */}
      <div className={`fixed inset-0 z-40 ${sidebarOpen ? 'block' : 'hidden'}`}>
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75"
          onClick={toggleSidebar}
        ></div>
        <div className="fixed inset-y-0 left-0 flex flex-col w-64 bg-indigo-900">
          <div className="flex items-center justify-between h-16 px-4 bg-indigo-800">
            <div className="flex items-center">
              <School className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">Admin Panel</span>
            </div>
            <button onClick={toggleSidebar} className="text-white">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="px-4 py-6 flex-1 overflow-y-auto">
            <div className="mb-8 text-center">
              <div className="w-20 h-20 rounded-full bg-indigo-700 flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-bold text-white">{user?.name?.charAt(0)}</span>
              </div>
              <h2 className="text-white font-semibold">{user?.name}</h2>
              <p className="text-indigo-300 text-sm">{user?.email}</p>
            </div>
            {sidebarItems.map((item, index) => (
              <SidebarItem
                key={index}
                icon={item.icon}
                title={item.title}
                path={item.path}
                isActive={getCurrentPath() === item.path}
              />
            ))}
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-3 mt-8 rounded-lg text-gray-300 hover:bg-indigo-800 hover:text-white transition-colors duration-200"
            >
              <LogOut className="w-5 h-5 mr-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 bg-indigo-900">
          <div className="flex items-center h-16 px-4 bg-indigo-800">
            <School className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold text-white">Admin Panel</span>
          </div>
          <div className="px-4 py-6 flex-1 overflow-y-auto">
            <div className="mb-8 text-center">
              <div className="w-20 h-20 rounded-full bg-indigo-700 flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-bold text-white">{user?.name?.charAt(0)}</span>
              </div>
              <h2 className="text-white font-semibold">{user?.name}</h2>
              <p className="text-indigo-300 text-sm">{user?.email}</p>
            </div>
            {sidebarItems.map((item, index) => (
              <SidebarItem
                key={index}
                icon={item.icon}
                title={item.title}
                path={item.path}
                isActive={getCurrentPath() === item.path}
              />
            ))}
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-3 mt-8 rounded-lg text-gray-300 hover:bg-indigo-800 hover:text-white transition-colors duration-200"
            >
              <LogOut className="w-5 h-5 mr-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <button
              onClick={toggleSidebar}
              className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="ml-4 md:ml-0">
              <h1 className="text-lg font-medium text-gray-900">
                {sidebarItems.find(item => item.path === getCurrentPath())?.title || 'Dashboard'}
              </h1>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
