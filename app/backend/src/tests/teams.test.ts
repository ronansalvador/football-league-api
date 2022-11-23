import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import { Response } from 'superagent';
import { response } from 'express';

chai.use(chaiHttp);
const { expect } = chai;

describe('Verifica a rota teams', () => {
  let chaiHttpResponse: Response;

  describe('GET /teams', () => {
    before(async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/teams');
    });

    it('retorna status code 200', async () => {
      expect(chaiHttpResponse).to.have.status(200);
    });

    it('retorna um array', async () => {  
      expect(chaiHttpResponse.body).to.be.an('array');
    });

    it('retorna um array com os nomes dos times', async () => {  
      expect(chaiHttpResponse.body[0]).to.have.property('teamName');
    });
  })

  describe('verifica a rota GET /teams/:id', () => {
    before(async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/teams/1');
    });

    it('retorna o status code 200', async () => {
      expect(chaiHttpResponse).to.have.status(200);
    });

    it('retorna um objeto com o nome dos times', async () => {  
      expect(chaiHttpResponse.body).to.have.property('teamName');
    });
  })

});