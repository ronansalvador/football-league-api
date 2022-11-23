import { Router } from 'express';
import LoginValidation from '../middlewares/loginValidation';
import LoginController from '../controllers/LoginController';

const loginRoute = Router();
const loginController = new LoginController();
const loginValidation = new LoginValidation();

loginRoute.post('/', loginValidation.loginV, loginController.login);

export default loginRoute;
