import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import App  from '../app';
import { Response } from 'superagent';
import { response } from 'express';

chai.use(chaiHttp);
const { app } = new App();
const { expect } = chai;

describe('Rota leaderboard', () => {
  let chaiHttpResponse: Response;

  describe('ROta GET /leaderboard/home', () => {
    before(async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/leaderboard/home');
    });

    it('retorna o status code 200', () => {
      expect(chaiHttpResponse).to.have.status(200);
    });

    it('retorna um array', () => {  
      expect(chaiHttpResponse.body).to.be.an('array');
    });

    it('retorna um array com a pontuação dos times', () => {  
      expect(chaiHttpResponse.body[0]).to.have.property('totalPoints');
    });
  })

  describe('Rota GET /leaderboard/away', () => {
    before(async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/leaderboard/away');
    });

    it('retorna o status code 200', () => {
      expect(chaiHttpResponse).to.have.status(200);
    });

    it('retorna um array', () => {  
      expect(chaiHttpResponse.body).to.be.an('array');
    });

    it('retorna um array com a pontuação dos times', () => {  
      expect(chaiHttpResponse.body[0]).to.have.property('totalPoints');
    });
  })

  describe('rota GET /leaderboard', () => {
    before(async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/leaderboard');
    });

    it('retorna o status code 200', () => {
      expect(chaiHttpResponse).to.have.status(200);
    });

    it('retorna um array', () => {  
      expect(chaiHttpResponse.body).to.be.an('array');
    });

    it('retorna um array com a pontuação dos times', () => {  
      expect(chaiHttpResponse.body[0]).to.have.property('totalPoints');
    });
  })
});