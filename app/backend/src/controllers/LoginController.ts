import { Request, Response } from 'express';
import LoginService from '../services/LoginService';
import UserModel from '../database/models/UserModel';

class LoginController {
  public model = UserModel;
  constructor(private loginService = new LoginService()) {}

  public login = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
    const result = await this.loginService.login(email, password);
    console.log(result);

    if (result === 'User not found'
    || result === 'Incorrect password') {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }
    if (!result) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json({ token: result });
  };

  public getRole = async (req: Request, res: Response): Promise<Response> => {
    const { email } = res.locals;
    const { role } = await this.model.findOne(email);
    return res.status(200).json({ role });
  };
}

export default LoginController;
