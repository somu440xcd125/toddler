import express from  'express';

import { registerUser, loginUser,contactUser,authMiddleware } from '../controller/user-controller.js';
const router = express.Router();

//login & signup
router.post('/signup', registerUser);
router.post('/login', loginUser);
router.post('/registercontact', contactUser);


export default router;