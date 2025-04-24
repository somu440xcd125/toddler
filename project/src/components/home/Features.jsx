import { Heart, Book, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Heart className="h-12 w-12 text-pink-500" />,
    title: 'Nurturing Environment',
    description: 'Our caring staff creates a warm, supportive atmosphere where every child feels valued and secure.'
  },
  {
    icon: <Book className="h-12 w-12 text-emerald-500" />,
    title: 'Play-Based Learning',
    description: 'We combine structured activities with free play to foster creativity, social skills, and cognitive development.'
  },
  {
    icon: <Award className="h-12 w-12 text-amber-500" />,
    title: 'Qualified Teachers',
    description: 'Our certified educators are passionate about early childhood education and dedicated to your child\'s growth.'
  },
  {
    icon: <Users className="h-12 w-12 text-indigo-500" />,
    title: 'Parent Partnership',
    description: 'We believe in strong communication and collaboration between parents and teachers for optimal learning outcomes.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose Little Learners?</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We provide an enriching educational experience that nurtures the whole child.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              variants={item}
            >
              <div className="flex justify-center items-center w-16 h-16 mx-auto bg-indigo-50 rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;