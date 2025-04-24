import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { 
  FileText, CheckCircle, AlertCircle, Clock, 
  ChevronDown, ChevronUp 
} from 'lucide-react';

const Admission = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  
  const onSubmit = (data) => {
    // In a real application, this would send the data to a backend
    console.log(data);
    setIsSubmitted(true);
  };

  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const faqs = [
    {
      question: "What is the admission process?",
      answer: "Our admission process involves submitting an application form, followed by a family interview and a classroom visit. After review, acceptance letters are sent out with registration information."
    },
    {
      question: "What are the age requirements for enrollment?",
      answer: "We offer programs for children from 2 to 6 years old. Children must be the appropriate age by September 1st for the program they are entering."
    },
    {
      question: "Are there any application fees?",
      answer: "Yes, there is a non-refundable application fee of $50 to process your child's application. Upon acceptance, there is also a registration fee of $150."
    },
    {
      question: "Is financial aid available?",
      answer: "We offer limited financial assistance based on demonstrated need. Please contact our admissions office for more information and to receive a financial aid application."
    },
    {
      question: "What is the teacher-to-student ratio?",
      answer: "Our teacher-to-student ratios are 1:4 for toddlers (2-3 years), 1:6 for preschool (3-4 years), and 1:8 for pre-K (4-5 years) and kindergarten (5-6 years)."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <motion.h1 
              className="text-4xl font-extrabold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Join Our Little Learners Family
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Apply online to begin your child's journey at Little Learners Nursery School
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Process Steps */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Admission Process
          </motion.h2>
          
          <div className="relative">
            <div className="absolute hidden md:block top-10 inset-0">
              <div className="h-1 w-full bg-indigo-100 mt-2.5"></div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: <FileText className="h-10 w-10 text-white" />,
                  title: "Submit Application",
                  description: "Complete and submit the online application form with all required information."
                },
                {
                  icon: <Clock className="h-10 w-10 text-white" />,
                  title: "Application Review",
                  description: "Our admissions team reviews your application and contacts you within 5 business days."
                },
                {
                  icon: <CheckCircle className="h-10 w-10 text-white" />,
                  title: "Acceptance",
                  description: "If accepted, you'll receive an enrollment packet with registration details."
                },
                {
                  icon: <AlertCircle className="h-10 w-10 text-white" />,
                  title: "Enrollment",
                  description: "Complete registration forms, pay deposit, and prepare for your child's first day!"
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-20 h-20 bg-indigo-600 rounded-full border-4 border-white relative z-10">
                      {step.icon}
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-center text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-indigo-600 px-6 py-5">
              <h2 className="text-2xl font-bold text-white">Application Form</h2>
              <p className="text-indigo-200 mt-1">
                Please fill out all required fields to begin the admission process
              </p>
            </div>
            
            {isSubmitted ? (
              <div className="p-8">
                <div className="text-center">
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-gray-900">Application Submitted!</h3>
                  <p className="mt-2 text-gray-600">
                    Thank you for applying to Little Learners Nursery School. We have received your application and will contact you within 5 business days.
                  </p>
                  <div className="mt-6">
                    <button 
                      type="button" 
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Submit Another Application
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="p-8">
                <div className="space-y-8">
                  {/* Child Information */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Child Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="childFirstName" className="block text-sm font-medium text-gray-700">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="childFirstName"
                          {...register("childFirstName", { required: "First name is required" })}
                          className={`mt-1 block w-full px-3 py-2 border ${errors.childFirstName ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                        />
                        {errors.childFirstName && (
                          <p className="mt-1 text-sm text-red-600">{errors.childFirstName.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="childLastName" className="block text-sm font-medium text-gray-700">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="childLastName"
                          {...register("childLastName", { required: "Last name is required" })}
                          className={`mt-1 block w-full px-3 py-2 border ${errors.childLastName ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                        />
                        {errors.childLastName && (
                          <p className="mt-1 text-sm text-red-600">{errors.childLastName.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="childDob" className="block text-sm font-medium text-gray-700">
                          Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          id="childDob"
                          {...register("childDob", { required: "Date of birth is required" })}
                          className={`mt-1 block w-full px-3 py-2 border ${errors.childDob ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                        />
                        {errors.childDob && (
                          <p className="mt-1 text-sm text-red-600">{errors.childDob.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="program" className="block text-sm font-medium text-gray-700">
                          Program <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="program"
                          {...register("program", { required: "Program selection is required" })}
                          className={`mt-1 block w-full px-3 py-2 border ${errors.program ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                        >
                          <option value="">Select a program</option>
                          <option value="toddlers">Toddlers (2-3 years)</option>
                          <option value="preschool">Preschool (3-4 years)</option>
                          <option value="preK">Pre-K (4-5 years)</option>
                          <option value="kindergarten">Kindergarten (5-6 years)</option>
                        </select>
                        {errors.program && (
                          <p className="mt-1 text-sm text-red-600">{errors.program.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                          Preferred Start Date <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          id="startDate"
                          {...register("startDate", { required: "Start date is required" })}
                          className={`mt-1 block w-full px-3 py-2 border ${errors.startDate ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                        />
                        {errors.startDate && (
                          <p className="mt-1 text-sm text-red-600">{errors.startDate.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Parent/Guardian Information */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Parent/Guardian Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="parentName"
                          {...register("parentName", { required: "Parent name is required" })}
                          className={`mt-1 block w-full px-3 py-2 border ${errors.parentName ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                        />
                        {errors.parentName && (
                          <p className="mt-1 text-sm text-red-600">{errors.parentName.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          {...register("email", { 
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address"
                            }
                          })}
                          className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          {...register("phone", { required: "Phone number is required" })}
                          className={`mt-1 block w-full px-3 py-2 border ${errors.phone ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                        )}
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                          Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="address"
                          {...register("address", { required: "Address is required" })}
                          className={`mt-1 block w-full px-3 py-2 border ${errors.address ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                        />
                        {errors.address && (
                          <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Emergency Contact */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Emergency Contact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="emergencyContactName" className="block text-sm font-medium text-gray-700">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="emergencyContactName"
                          {...register("emergencyContactName", { required: "Emergency contact name is required" })}
                          className={`mt-1 block w-full px-3 py-2 border ${errors.emergencyContactName ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                        />
                        {errors.emergencyContactName && (
                          <p className="mt-1 text-sm text-red-600">{errors.emergencyContactName.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="emergencyContactPhone" className="block text-sm font-medium text-gray-700">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="emergencyContactPhone"
                          {...register("emergencyContactPhone", { required: "Emergency contact phone is required" })}
                          className={`mt-1 block w-full px-3 py-2 border ${errors.emergencyContactPhone ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                        />
                        {errors.emergencyContactPhone && (
                          <p className="mt-1 text-sm text-red-600">{errors.emergencyContactPhone.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Additional Information */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Information</h3>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="specialNeeds" className="block text-sm font-medium text-gray-700">
                          Special Needs or Considerations
                        </label>
                        <textarea
                          id="specialNeeds"
                          rows={3}
                          {...register("specialNeeds")}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Please share any special needs, allergies, or other considerations we should be aware of"
                        />
                      </div>
                      <div>
                        <label htmlFor="hearAboutUs" className="block text-sm font-medium text-gray-700">
                          How did you hear about us? <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="hearAboutUs"
                          {...register("hearAboutUs", { required: "This field is required" })}
                          className={`mt-1 block w-full px-3 py-2 border ${errors.hearAboutUs ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                        >
                          <option value="">Please select</option>
                          <option value="search">Internet Search</option>
                          <option value="social">Social Media</option>
                          <option value="friend">Friend/Family Referral</option>
                          <option value="event">Community Event</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.hearAboutUs && (
                          <p className="mt-1 text-sm text-red-600">{errors.hearAboutUs.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Terms and Conditions */}
                  <div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="agreeTerms"
                          type="checkbox"
                          {...register("agreeTerms", { required: "You must agree to the terms and conditions" })}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3">
                        <label htmlFor="agreeTerms" className="text-sm text-gray-700">
                          I agree to the <a href="#" className="text-indigo-600 hover:text-indigo-500">terms and conditions</a> <span className="text-red-500">*</span>
                        </label>
                        {errors.agreeTerms && (
                          <p className="mt-1 text-sm text-red-600">{errors.agreeTerms.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Submit Application
                    </button>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-4 py-4 hover:bg-gray-50 focus:outline-none"
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;