import { Users, UserCheck, Clock, Calendar, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const students = [
  { name: 'Emma Johnson', attendance: 'Present', notes: 'Participated actively in circle time' },
  { name: 'Noah Smith', attendance: 'Present', notes: 'Completed all activities' },
  { name: 'Ava Brown', attendance: 'Absent', notes: 'Parent called - sick' },
  { name: 'Liam Davis', attendance: 'Present', notes: 'Helped clean up after snack time' },
  { name: 'Sophia Wilson', attendance: 'Late', notes: 'Arrived at 10:15 AM' },
  { name: 'Jackson Lee', attendance: 'Present', notes: 'Needs help with scissors' },
  { name: 'Olivia Martin', attendance: 'Present', notes: 'Shared toys nicely today' },
];

const todaySchedule = [
  { time: '8:30 AM - 9:00 AM', activity: 'Arrival & Free Play' },
  { time: '9:00 AM - 9:30 AM', activity: 'Circle Time' },
  { time: '9:30 AM - 10:15 AM', activity: 'Learning Centers' },
  { time: '10:15 AM - 10:45 AM', activity: 'Snack Time' },
  { time: '10:45 AM - 11:30 AM', activity: 'Outdoor Play' },
  { time: '11:30 AM - 12:00 PM', activity: 'Story Time & Music' },
  { time: '12:00 PM - 12:45 PM', activity: 'Lunch' },
  { time: '12:45 PM - 2:30 PM', activity: 'Nap Time' },
  { time: '2:30 PM - 3:15 PM', activity: 'Afternoon Activities' },
  { time: '3:15 PM - 3:45 PM', activity: 'Closing Circle & Dismissal' },
];

const recentMessages = [
  { sender: 'Sarah Johnson (Emma\'s Mom)', message: 'Emma enjoyed the art project yesterday. Can you send me pictures?', time: '2 hours ago' },
  { sender: 'Michael Smith (Noah\'s Dad)', message: 'Noah will be picked up by his grandmother today.', time: '1 day ago' },
  { sender: 'Admin Office', message: 'Reminder: Staff meeting tomorrow at 4:00 PM', time: '1 day ago' },
];

const TeacherDashboard = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Teacher Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's your classroom overview for today.</p>
      </div>
      
      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div 
          className="bg-white rounded-xl shadow-sm p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-emerald-100">
              <Users className="h-8 w-8 text-emerald-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-gray-500 text-sm font-medium">Total Students</h3>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-xl shadow-sm p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100">
              <UserCheck className="h-8 w-8 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-gray-500 text-sm font-medium">Attendance Today</h3>
              <p className="text-2xl font-bold text-gray-900">21 <span className="text-sm font-normal text-gray-500">(87.5%)</span></p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-xl shadow-sm p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100">
              <Clock className="h-8 w-8 text-purple-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-gray-500 text-sm font-medium">Current Activity</h3>
              <p className="text-xl font-bold text-gray-900">Learning Centers</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Today's Attendance */}
        <motion.div 
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Today's Attendance</h2>
            <button className="text-sm font-medium text-emerald-600 hover:text-emerald-800">
              Take Attendance
            </button>
          </div>
          <div className="overflow-y-auto" style={{ maxHeight: '400px' }}>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {students.map((student, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-600 font-bold">
                          {student.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        student.attendance === 'Present' ? 'bg-green-100 text-green-800' :
                        student.attendance === 'Absent' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {student.attendance}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {student.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        
        {/* Daily Schedule */}
        <motion.div 
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Daily Schedule</h2>
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <div className="px-6 py-5 overflow-y-auto" style={{ maxHeight: '400px' }}>
            <div className="flow-root">
              <ul className="-mb-8">
                {todaySchedule.map((item, index) => (
                  <li key={index}>
                    <div className="relative pb-8">
                      {index !== todaySchedule.length - 1 && (
                        <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"></span>
                      )}
                      <div className="relative flex items-start space-x-3">
                        <div>
                          <div className="relative px-1">
                            <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center ring-8 ring-white">
                              <span className="text-xs font-medium text-emerald-700">{index + 1}</span>
                            </div>
                          </div>
                        </div>
                        <div className="min-w-0 flex-1 py-1.5">
                          <div className="text-sm text-gray-500">
                            <div className="font-medium text-gray-900">{item.activity}</div>
                            <span>{item.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Recent Messages */}
      <motion.div 
        className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden"
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
                      <div className="h-10 w-10 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-600 font-bold">
                        {message.sender.charAt(0)}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">{message.sender}</p>
                        <p className="text-xs text-gray-500">{message.time}</p>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{message.message}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex">
            <input
              type="text"
              placeholder="Type a message..."
              className="block w-full border border-gray-300 rounded-l-md shadow-sm py-2 px-4 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <button className="px-4 py-2 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
              Send
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TeacherDashboard;