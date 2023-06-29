import express from 'express';
import * as userController from '../controllers/user.controller';
import { signInRegistration } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to get all users
router.get('/login', userController.loginUser);

// //route to create a new user
router.post('',signInRegistration, userController.registrationUser);

export default router;
