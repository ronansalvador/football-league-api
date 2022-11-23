import { Router } from 'express';
import LoginValidation from '../middlewares/loginValidation';
import LoginController from '../controllers/LoginController';
import authMiddleware from '../middlewares/Auth';

const loginRoute = Router();
const loginController = new LoginController();
const loginValidation = new LoginValidation();

loginRoute.post('/', loginValidation.loginV, loginController.login);
loginRoute.get('/validate', authMiddleware.tokenValidation, loginController.getRole);

export default loginRoute;
