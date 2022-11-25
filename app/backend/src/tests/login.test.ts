import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import App from '../app';
import User from '../database/models/UserModel';

import { Response } from 'superagent';

chai.use(chaiHttp);
const { app } = new App();
const { expect } = chai;

describe('Verifica rota de Login', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(User, "findOne")
      .resolves({ } as User);
  });

  after(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })

  describe('Validação de User', () => {

    before(async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
       email: 'user@user.com',
       password: 'secret_password',
     });
    });

    it('Retorna status code 200', async () => {
      expect(chaiHttpResponse).to.have.status(200);
    });

    it('Retorno um token', async () => {  
      expect(chaiHttpResponse.body).to.have.property('token');
    });
  })

});