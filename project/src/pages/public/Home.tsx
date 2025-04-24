import Hero from '../../components/home/Hero';
import Features from '../../components/home/Features';
import Programs from '../../components/home/Programs';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Phone } from 'lucide-react';

const testimonials = [
  {
    quote: "Little Learners has been the perfect start to my daughter's education journey. The teachers are caring and the activities are engaging.",
    name: "Sarah Johnson",
    role: "Parent of Emma, age 4"
  },
  {
    quote: "We've seen tremendous growth in our son's social skills and confidence since he started at Little Learners. Highly recommend!",
    name: "Michael Chen",
    role: "Parent of Lucas, age 3"
  },
  {
    quote: "The curriculum is thoughtfully designed and my child loves going to school every day. We couldn't be happier with our choice.",
    name: "Jessica Rodriguez",
    role: "Parent of Sofia, age 5"
  }
];

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Programs />
      
      {/* Testimonials */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Parents Say</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our community of satisfied parents.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <svg className="h-10 w-10 text-indigo-400 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-12 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="py-6">
              <p className="text-5xl font-bold text-white mb-2">15+</p>
              <p className="text-indigo-200">Years of Excellence</p>
            </div>
            <div className="py-6">
              <p className="text-5xl font-bold text-white mb-2">25+</p>
              <p className="text-indigo-200">Certified Teachers</p>
            </div>
            <div className="py-6">
              <p className="text-5xl font-bold text-white mb-2">500+</p>
              <p className="text-indigo-200">Happy Students</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Little Learners?</h2>
              <p className="text-xl text-gray-600 mb-6">
                Enroll your child in our nurturing educational environment today.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="/admission" 
                  className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
                >
                  Apply Now
                </a>
                <a 
                  href="/contact" 
                  className="inline-block border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium py-3 px-6 rounded-lg transition duration-300 text-center"
                >
                  Contact Us
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-gray-50 rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit Our School</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-indigo-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">123 Learning Lane, Edutown, ET 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-indigo-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CalendarDays className="h-5 w-5 text-indigo-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Hours</p>
                      <p className="text-gray-600">Monday - Friday: 7:30 AM - 5:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;