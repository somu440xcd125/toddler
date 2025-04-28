import { motion } from 'framer-motion';
import { BookOpen, Clock, Users, Calendar } from 'lucide-react';

const Programs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const programs = [
    {
      title: "Infant Care",
      ageRange: "6 weeks - 12 months",
      description: "Nurturing care in a safe, stimulating environment focused on sensory experiences and developmental milestones.",
      schedule: "Full-time / Part-time",
      image: "https://images.pexels.com/photos/5759191/pexels-photo-5759191.jpeg",
      features: [
        "Low teacher-to-child ratio",
        "Daily progress reports",
        "Personalized care routines",
        "Age-appropriate activities"
      ]
    },
    {
      title: "Toddler Program",
      ageRange: "1 - 2 years",
      description: "Active learning through play, fostering independence and social skills in a supportive setting.",
      schedule: "Full-time / Part-time",
      image: "https://images.pexels.com/photos/8612992/pexels-photo-8612992.jpeg",
      features: [
        "Structured playtime",
        "Language development",
        "Motor skills activities",
        "Social interaction"
      ]
    },
    {
      title: "Preschool",
      ageRange: "3 - 4 years",
      description: "Comprehensive early education program combining play-based learning with academic foundations.",
      schedule: "Full-time / Part-time",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg",
      features: [
        "Pre-reading skills",
        "Basic mathematics",
        "Arts and crafts",
        "Physical education"
      ]
    },
    {
      title: "Pre-K",
      ageRange: "4 - 5 years",
      description: "Advanced preparation for kindergarten with focus on academic, social, and emotional readiness.",
      schedule: "Full-time / Part-time",
      image: "https://images.pexels.com/photos/8612927/pexels-photo-8612927.jpeg",
      features: [
        "Reading preparation",
        "Number concepts",
        "Science exploration",
        "Writing skills"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-indigo-50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-60"></div>
          <img 
            src="https://images.pexels.com/photos/8612919/pexels-photo-8612919.jpeg" 
            alt="Children learning" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl sm:text-5xl font-extrabold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Programs
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover our comprehensive early childhood education programs designed to nurture your child's growth and development.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
              >
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <div className="flex items-center mb-4 text-gray-600">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{program.ageRange}</span>
                    <Clock className="h-5 w-5 ml-6 mr-2" />
                    <span>{program.schedule}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <div className="space-y-3">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-600">
                        <BookOpen className="h-5 w-5 text-indigo-500 mr-3" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Daily Schedule
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              A structured day designed for learning and fun
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { time: "7:00 AM - 9:00 AM", activity: "Arrival & Free Play" },
              { time: "9:00 AM - 11:30 AM", activity: "Learning Activities" },
              { time: "11:30 AM - 2:30 PM", activity: "Lunch & Rest Time" },
              { time: "2:30 PM - 6:00 PM", activity: "Activities & Departure" }
            ].map((schedule, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
              >
                <Calendar className="h-8 w-8 text-indigo-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{schedule.time}</h3>
                <p className="text-gray-600">{schedule.activity}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Enroll Your Child?
          </motion.h2>
          <motion.p 
            className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Schedule a tour to learn more about our programs and see our facilities in person.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a 
              href="/contact" 
              className="inline-block bg-white text-indigo-600 hover:bg-indigo-50 font-medium py-3 px-6 rounded-lg transition duration-300"
            >
              Schedule a Tour
            </a>
            <a 
              href="/admission" 
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Programs;