import express from  'express';

import { registerUser, loginUser,authMiddleware } from '../controller/user-controller.js';
const router = express.Router();

//login & signup
router.post('/signup', registerUser);
router.post('/login', loginUser);


export default router;