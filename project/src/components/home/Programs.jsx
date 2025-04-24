import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const programs = [
  {
    title: 'Toddlers',
    ageRange: '2-3 years',
    description: 'A nurturing introduction to school life focusing on language development, sensory exploration, and social skills.',
    image: 'https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg',
    color: 'bg-blue-500'
  },
  {
    title: 'Preschool',
    ageRange: '3-4 years',
    description: 'Building foundational skills through interactive learning, creative arts, and guided play experiences.',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
    color: 'bg-green-500'
  },
  {
    title: 'Pre-K',
    ageRange: '4-5 years',
    description: 'Preparing for kindergarten through literacy, numeracy, and social-emotional development activities.',
    image: 'https://images.pexels.com/photos/8612931/pexels-photo-8612931.jpeg',
    color: 'bg-purple-500'
  }
];

const Programs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Programs</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Age-appropriate educational experiences designed to foster growth and development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className={`absolute top-4 right-4 ${program.color} text-white text-sm font-medium py-1 px-3 rounded-full`}>
                  {program.ageRange}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <Link 
                  to="/programs" 
                  className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center transition-colors duration-300"
                >
                  Learn more 
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/programs" 
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Programs;