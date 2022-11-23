import { Request, Response } from 'express';
import LoginService from '../services/LoginService';

class LoginController {
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
}

export default LoginController;
