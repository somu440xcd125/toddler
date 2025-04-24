import { Calendar, Bell, Image, MessageCircle, Book, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const childActivities = [
  { date: 'Today', activity: 'Practiced alphabet recognition and writing letter A', category: 'Learning' },
  { date: 'Today', activity: 'Participated in group singing during circle time', category: 'Social' },
  { date: 'Yesterday', activity: 'Created a watercolor painting of a family', category: 'Art' },
  { date: 'Yesterday', activity: 'Counted objects up to 20 successfully', category: 'Math' },
  { date: '2 days ago', activity: 'Read "The Very Hungry Caterpillar" and discussed metamorphosis', category: 'Reading' },
];

const upcomingEvents = [
  { title: 'Parent-Teacher Conference', date: '2025-05-15', time: '4:00 PM - 4:30 PM' },
  { title: 'Field Trip to Science Museum', date: '2025-05-20', time: '9:30 AM - 1:00 PM' },
  { title: 'Summer Camp Registration Deadline', date: '2025-05-25', time: 'All day' },
];

const recentNotices = [
  { title: 'School Closed for Staff Development', date: '2025-05-10', priority: 'High' },
  { title: 'Summer Camp Registration Now Open', date: '2025-05-02', priority: 'Medium' },
  { title: 'Updated Lunch Menu for May', date: '2025-04-28', priority: 'Low' },
];

const galleryImages = [
  'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
  'https://images.pexels.com/photos/8612931/pexels-photo-8612931.jpeg',
  'https://images.pexels.com/photos/8613265/pexels-photo-8613265.jpeg',
  'https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg'
];

const childInfo = {
  name: 'Emma Johnson',
  age: '4 years',
  class: 'Sunshine (Pre-K)',
  teacher: 'Ms. Sarah Williams',
  attendance: {
    present: 18,
    absent: 1,
    late: 1,
    total: 20
  }
};

const ParentDashboard = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Parent Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with {childInfo.name}.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Child Information */}
        <motion.div 
          className="lg:col-span-1 bg-white rounded-xl shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Child Information</h2>
          </div>
          <div className="px-6 py-5">
            <div className="flex flex-col items-center mb-6">
              <div className="h-24 w-24 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-4xl mb-4">
                {childInfo.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{childInfo.name}</h3>
              <p className="text-gray-600">{childInfo.age} • {childInfo.class}</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between pb-4 border-b border-gray-100">
                <span className="text-gray-600">Teacher:</span>
                <span className="font-medium text-gray-900">{childInfo.teacher}</span>
              </div>
              
              <div className="pb-4 border-b border-gray-100">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Attendance (This Month):</span>
                  <span className="font-medium text-gray-900">{Math.round((childInfo.attendance.present / childInfo.attendance.total) * 100)}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2.5 mb-1">
                  <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: `${(childInfo.attendance.present / childInfo.attendance.total) * 100}%` }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Present: {childInfo.attendance.present}</span>
                  <span>Absent: {childInfo.attendance.absent}</span>
                  <span>Late: {childInfo.attendance.late}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Message Teacher
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Recent Activities */}
        <motion.div 
          className="lg:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Recent Activities</h2>
            <Book className="h-5 w-5 text-gray-400" />
          </div>
          <div className="px-6 py-5 overflow-y-auto" style={{ maxHeight: '400px' }}>
            <div className="flow-root">
              <ul className="-mb-8">
                {childActivities.map((activity, index) => (
                  <li key={index}>
                    <div className="relative pb-8">
                      {index !== childActivities.length - 1 && (
                        <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"></span>
                      )}
                      <div className="relative flex items-start space-x-3">
                        <div>
                          <div className="relative px-1">
                            <div className={`h-10 w-10 rounded-full flex items-center justify-center ring-8 ring-white ${
                              activity.category === 'Learning' ? 'bg-blue-100' :
                              activity.category === 'Social' ? 'bg-purple-100' :
                              activity.category === 'Art' ? 'bg-pink-100' :
                              activity.category === 'Math' ? 'bg-green-100' :
                              'bg-yellow-100'
                            }`}>
                              <span className={`text-xs font-medium ${
                                activity.category === 'Learning' ? 'text-blue-700' :
                                activity.category === 'Social' ? 'text-purple-700' :
                                activity.category === 'Art' ? 'text-pink-700' :
                                activity.category === 'Math' ? 'text-green-700' :
                                'text-yellow-700'
                              }`}>{activity.category.charAt(0)}</span>
                            </div>
                          </div>
                        </div>
                        <div className="min-w-0 flex-1 py-1.5">
                          <div className="text-sm text-gray-500">
                            <div className="font-medium text-gray-900">{activity.activity}</div>
                            <div className="mt-1 flex items-center">
                              <span className="text-xs text-gray-500">{activity.date}</span>
                              <span className={`ml-2 px-2 py-0.5 rounded text-xs ${
                                activity.category === 'Learning' ? 'bg-blue-100 text-blue-700' :
                                activity.category === 'Social' ? 'bg-purple-100 text-purple-700' :
                                activity.category === 'Art' ? 'bg-pink-100 text-pink-700' :
                                activity.category === 'Math' ? 'bg-green-100 text-green-700' :
                                'bg-yellow-100 text-yellow-700'
                              }`}>{activity.category}</span>
                            </div>
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Upcoming Events */}
        <motion.div 
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Upcoming Events</h2>
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <div className="px-6 py-5">
            <div className="flow-root">
              <ul className="-my-5 divide-y divide-gray-200">
                {upcomingEvents.map((event, index) => (
                  <li key={index} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex flex-col items-center">
                          <span className="text-xs font-medium text-gray-500">
                            {new Date(event.date).toLocaleString('default', { month: 'short' })}
                          </span>
                          <span className="text-2xl font-bold text-gray-900">
                            {new Date(event.date).getDate()}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{event.title}</p>
                        <p className="text-sm text-gray-500">{event.time}</p>
                      </div>
                      <div>
                        <button className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-orange-700 bg-orange-100 hover:bg-orange-200">
                          Remind me
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
        
        {/* Latest Notices */}
        <motion.div 
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Latest Notices</h2>
            <Bell className="h-5 w-5 text-gray-400" />
          </div>
          <div className="px-6 py-5">
            <div className="flow-root">
              <ul className="-my-5 divide-y divide-gray-200">
                {recentNotices.map((notice, index) => (
                  <li key={index} className="py-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full ${
                          notice.priority === 'High' ? 'bg-red-100' :
                          notice.priority === 'Medium' ? 'bg-yellow-100' :
                          'bg-green-100'
                        }`}>
                          <span className={`text-xs font-medium ${
                            notice.priority === 'High' ? 'text-red-800' :
                            notice.priority === 'Medium' ? 'text-yellow-800' :
                            'text-green-800'
                          }`}>{notice.priority.charAt(0)}</span>
                        </span>
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="text-sm font-medium text-gray-900">{notice.title}</div>
                        <div className="mt-1 text-sm text-gray-500">
                          Posted on {new Date(notice.date).toLocaleDateString()}
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
      
      {/* Gallery Preview */}
      <motion.div 
        className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900">Recent Class Photos</h2>
          <div className="flex items-center">
            <Image className="h-5 w-5 text-gray-400 mr-2" />
            <a href="#" className="text-sm font-medium text-orange-600 hover:text-orange-500">View All</a>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-40 rounded-lg overflow-hidden group">
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ParentDashboard;