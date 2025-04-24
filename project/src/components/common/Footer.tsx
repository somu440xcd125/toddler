import { Link } from 'react-router-dom';
import { School, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <School className="h-8 w-8 text-indigo-300" />
              <span className="ml-2 text-xl font-bold">Little Learners</span>
            </div>
            <p className="text-indigo-200 mb-4">
              Nurturing young minds with care, creativity, and compassion since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-indigo-200 hover:text-white transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-indigo-200 hover:text-white transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-indigo-200 hover:text-white transition-colors duration-300">About</Link>
              </li>
              <li>
                <Link to="/programs" className="text-indigo-200 hover:text-white transition-colors duration-300">Programs</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-indigo-200 hover:text-white transition-colors duration-300">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-indigo-200 hover:text-white transition-colors duration-300">Contact</Link>
              </li>
              <li>
                <Link to="/admission" className="text-indigo-200 hover:text-white transition-colors duration-300">Admission</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-300">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/programs" className="text-indigo-200 hover:text-white transition-colors duration-300">Toddlers (2-3 years)</Link>
              </li>
              <li>
                <Link to="/programs" className="text-indigo-200 hover:text-white transition-colors duration-300">Preschool (3-4 years)</Link>
              </li>
              <li>
                <Link to="/programs" className="text-indigo-200 hover:text-white transition-colors duration-300">Pre-K (4-5 years)</Link>
              </li>
              <li>
                <Link to="/programs" className="text-indigo-200 hover:text-white transition-colors duration-300">Kindergarten (5-6 years)</Link>
              </li>
              <li>
                <Link to="/programs" className="text-indigo-200 hover:text-white transition-colors duration-300">After School Program</Link>
              </li>
              <li>
                <Link to="/programs" className="text-indigo-200 hover:text-white transition-colors duration-300">Summer Camp</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-300">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-indigo-300 mr-2 mt-0.5" />
                <span className="text-indigo-200">123 Learning Lane, Edutown, ET 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-indigo-300 mr-2" />
                <span className="text-indigo-200">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-indigo-300 mr-2" />
                <span className="text-indigo-200">info@littlelearners.edu</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-indigo-800 mt-12 pt-8 text-center text-indigo-300">
          <p>&copy; {new Date().getFullYear()} Little Learners Nursery School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;