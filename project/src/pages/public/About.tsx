import { motion } from 'framer-motion';
import { Award, Heart, Star, School, CheckCircle } from 'lucide-react';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };
  
  const teamMembers = [
    {
      name: 'Dr. Emily Carter',
      role: 'School Director',
      bio: 'Ph.D. in Early Childhood Education with over 15 years of experience leading educational institutions.',
      image: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg'
    },
    {
      name: 'Michael Johnson',
      role: 'Head Teacher',
      bio: 'Masters in Child Development and 10 years of classroom experience specializing in play-based learning.',
      image: 'https://images.pexels.com/photos/8617981/pexels-photo-8617981.jpeg'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Curriculum Coordinator',
      bio: 'Specialized in designing engaging activities that nurture cognitive, social, and emotional development.',
      image: 'https://images.pexels.com/photos/5905919/pexels-photo-5905919.jpeg'
    },
    {
      name: 'David Chen',
      role: 'Parent Liaison',
      bio: 'Focuses on building strong partnerships between parents and teachers to support children\'s growth.',
      image: 'https://images.pexels.com/photos/8617914/pexels-photo-8617914.jpeg'
    }
  ];
  
  const ourValues = [
    {
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      title: 'Nurturing Environment',
      description: 'We create a loving, supportive atmosphere where children feel safe to explore and express themselves.'
    },
    {
      icon: <Star className="h-8 w-8 text-amber-500" />,
      title: 'Child-Centered Approach',
      description: 'Our curriculum is designed around children\'s interests, abilities, and learning styles.'
    },
    {
      icon: <Award className="h-8 w-8 text-emerald-500" />,
      title: 'Excellence in Education',
      description: 'We maintain high standards for our programs, facilities, and staff to provide the best learning experience.'
    },
    {
      icon: <School className="h-8 w-8 text-indigo-500" />,
      title: 'Lifelong Learning',
      description: 'We foster curiosity and a love of learning that will stay with children throughout their lives.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-indigo-50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-60"></div>
          <img 
            src="https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg" 
            alt="Children playing" 
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
              About Little Learners
            </motion.h1>
            
            <motion.p 
              className="text-xl text-white mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Since 2005, we've been dedicated to providing exceptional early childhood education in a warm, supportive environment where children can grow, explore, and thrive.
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div 
              className="mb-12 lg:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  Little Learners Nursery School was founded in 2005 by a group of passionate educators and parents who believed in creating an educational environment that nurtures the whole child.
                </p>
                <p className="mb-4">
                  What began as a small preschool with just 15 children has grown into a thriving educational community serving over 150 families annually, while maintaining our commitment to personalized attention and care.
                </p>
                <p className="mb-4">
                  Our approach combines the best elements of various educational philosophies, including Montessori, Reggio Emilia, and traditional methods, tailored to meet the unique needs of each child.
                </p>
                <p>
                  Throughout our journey, we've remained dedicated to our founding principle: children learn best when they feel safe, valued, and engaged in meaningful play and exploration.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
                <img 
                  src="https://images.pexels.com/photos/8613186/pexels-photo-8613186.jpeg" 
                  alt="Children playing in classroom" 
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-indigo-100 rounded-xl -z-10"></div>
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-orange-100 rounded-xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Values
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              The principles that guide everything we do at Little Learners
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ourValues.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex justify-center items-center w-16 h-16 mx-auto bg-indigo-50 rounded-full mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Meet Our Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Meet Our Team
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Dedicated professionals committed to nurturing your child's development
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="h-56 relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Accreditations */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div 
              className="mb-12 lg:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Accreditations</h2>
              <p className="text-gray-600 mb-8">
                Little Learners maintains the highest standards of excellence in early childhood education, as recognized by these prestigious accrediting bodies:
              </p>
              
              <ul className="space-y-4">
                {[
                  "National Association for the Education of Young Children (NAEYC)",
                  "State Department of Education - 5-Star Quality Rating",
                  "AdvancED Early Learning Accreditation",
                  "Health & Safety Certification from the National Health & Safety Foundation"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-center h-32">
                  <div className="text-center">
                    <Award className="h-10 w-10 text-indigo-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-900">Certification {item}</p>
                  </div>
                </div>
              ))}
            </motion.div>
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
            Ready to Join the Little Learners Family?
          </motion.h2>
          <motion.p 
            className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Schedule a tour or apply for admission today to secure your child's place in our nurturing educational community.
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

export default About;