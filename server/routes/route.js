import express from  'express';

import { registerUser, loginUser,contactUser,authMiddleware,getContact,handleAdmission,getAdmissionDetails } from '../controller/user-controller.js';
const router = express.Router();

//login & signup
router.post('/signup', registerUser);
router.post('/login', loginUser);
router.post('/registercontact', contactUser);
router.get('/getcontact', getContact);
router.post('/admission', handleAdmission);
router.get('/admissiondetails', getAdmissionDetails);


export default router;