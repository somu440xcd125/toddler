import { BarChart3, Users, UserCheck, GraduationCap, Bell, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const statsCards = [
  { title: 'Total Students', value: '156', icon: <Users className="h-8 w-8 text-indigo-600" />, change: '+12%', changeType: 'positive' },
  { title: 'Total Teachers', value: '24', icon: <GraduationCap className="h-8 w-8 text-emerald-600" />, change: '+2', changeType: 'positive' },
  { title: 'Attendance Today', value: '92%', icon: <UserCheck className="h-8 w-8 text-blue-600" />, change: '-3%', changeType: 'negative' },
  { title: 'New Admissions', value: '18', icon: <BarChart3 className="h-8 w-8 text-orange-600" />, change: '+4', changeType: 'positive' },
];

const recentNotices = [
  { title: 'Parent-Teacher Meeting', date: '2025-05-15', type: 'Event' },
  { title: 'Summer Camp Registration Open', date: '2025-05-10', type: 'Announcement' },
  { title: 'School Closed for Labor Day', date: '2025-05-01', type: 'Holiday' },
  { title: 'Annual Day Preparations', date: '2025-04-28', type: 'Event' },
];

const recentMessages = [
  { sender: 'Emily Johnson', role: 'Parent', message: 'Thank you for organizing the science fair. My daughter had a wonderful time!', time: '2 hours ago' },
  { sender: 'David Martinez', role: 'Teacher', message: 'When will the new educational materials arrive?', time: '5 hours ago' },
  { sender: 'Sarah Williams', role: 'Parent', message: 'Can we schedule a meeting to discuss Tom\'s progress?', time: '1 day ago' },
];

const pendingAdmissions = [
  { name: 'Sophia Lee', age: '4 years', program: 'Pre-K', applicationDate: '2025-05-02' },
  { name: 'Ethan Brown', age: '3 years', program: 'Preschool', applicationDate: '2025-05-01' },
  { name: 'Olivia Garcia', age: '2 years', program: 'Toddlers', applicationDate: '2025-04-30' },
];

const AdminDashboard = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsCards.map((card, index) => (
          <motion.div 
            key={index}
            className="bg-white rounded-xl shadow-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-full bg-gray-100">
                {card.icon}
              </div>
              <span className={`text-sm font-medium ${card.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                {card.change}
              </span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium">{card.title}</h3>
            <p className="text-3xl font-bold text-gray-900">{card.value}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pending Admissions */}
        <motion.div 
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Pending Admissions</h2>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
              {pendingAdmissions.length} new
            </span>
          </div>
          <div className="px-6 py-5">
            <div className="flow-root">
              <ul className="-my-5 divide-y divide-gray-200">
                {pendingAdmissions.map((admission, index) => (
                  <li key={index} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-600 font-bold">
                          {admission.name.charAt(0)}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{admission.name}</p>
                        <p className="text-sm text-gray-500 truncate">
                          {admission.age} • {admission.program} • Applied {new Date(admission.applicationDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 text-xs font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                          Approve
                        </button>
                        <button className="px-3 py-1 text-xs font-medium rounded-md text-white bg-red-600 hover:bg-red-700">
                          Reject
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <a href="#" className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                View all
              </a>
            </div>
          </div>
        </motion.div>
        
        {/* Recent Messages */}
        <motion.div 
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Recent Messages</h2>
            <MessageCircle className="h-5 w-5 text-gray-400" />
          </div>
          <div className="px-6 py-5">
            <div className="flow-root">
              <ul className="-my-5 divide-y divide-gray-200">
                {recentMessages.map((message, index) => (
                  <li key={index} className="py-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-600 font-bold">
                          {message.sender.charAt(0)}
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900">
                            {message.sender} <span className="font-normal text-gray-500">({message.role})</span>
                          </p>
                          <p className="text-xs text-gray-500">{message.time}</p>
                        </div>
                        <p className="text-sm text-gray-500 mt-1 truncate">{message.message}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <a href="#" className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                View all messages
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Recent Notices */}
      <motion.div 
        className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900">Recent Notices</h2>
          <Bell className="h-5 w-5 text-gray-400" />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentNotices.map((notice, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{notice.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      notice.type === 'Event' ? 'bg-blue-100 text-blue-800' :
                      notice.type === 'Announcement' ? 'bg-green-100 text-green-800' :
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {notice.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(notice.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</a>
                    <a href="#" className="text-red-600 hover:text-red-900">Delete</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <button className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            Post New Notice
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;