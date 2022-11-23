import { compare } from 'bcryptjs';
import * as Jwt from 'jsonwebtoken';
import IUser from '../interface/IUser';
import IToken from '../interface/IToken';
import UserModel from '../database/models/UserModel';

const JWT_SECRET = 'jwt_secret';
class LoginService {
  public model = UserModel;

  public login = async (email: string, password: string): Promise<IToken | string> => {
    const user = await this.model.findOne({ where: { email }, raw: true }) as IUser;
    console.log(user);
    if (!user) {
      return 'User not found';
    }
    const validation = await compare(password, user?.password);
    if (!validation) {
      return 'Incorrect password';
    }
    const token = Jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: '1d',
    });
    return token as unknown as IToken;
  };
}

export default LoginService;
