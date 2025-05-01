import { createContext, useContext, useState,useCallback,useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from './AuthContext';
const InteractionContext = createContext();

export const InteractionProvider = ({ children }) => {
    const {setLoading}=useAuth()
  const [admissionStatus, setAdmissionStatus] = useState(null); // ✅ this was missing
  const[admissiondetails,setAddmisionDEtails]=useState([])
 
  const submitAdmissionForm = async (formData) => {
    console.log(formData)
    try {
     const response= await axios.post("http://localhost:8000/api/users/admission", formData); // ✅ update this if your route differs
    
      setAdmissionStatus(response.status);
      toast.success("Admission form submitted successfully!");
    } catch (error) {
      console.error(error);
      setAdmissionStatus("error");
      toast.error("Failed to submit admission form");
    }
  };

  const getAdmissiondetails = useCallback(async () => {
      setLoading(true);
      try {
        const response = await axios.get(
        //   'https://toddler-backend.onrender.com/api/users/getcontact',
  
          'http://localhost:8000/api/users/admissiondetails',
          { withCredentials: true }
        );
   
        setAddmisionDEtails(response.data)
      } catch (error) {
        console.error(error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    }, []);
    useEffect(() => {
        getAdmissiondetails();
    }, []);

  return (
    <InteractionContext.Provider value={{ submitAdmissionForm, admissionStatus,admissiondetails }}>
      {children}
    </InteractionContext.Provider>
  );
};

export const useInteraction = () => useContext(InteractionContext);
