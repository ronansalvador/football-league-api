import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import App from '../app';
import { Response } from 'superagent';
import { response } from 'express';

chai.use(chaiHttp);
const { app } = new App();
const { expect } = chai;

describe('Verifica a rota matches', () => {
  let chaiHttpResponse: Response;

  describe('verifica a rota GET /matches', () => {
    before(async () => {
      chaiHttpResponse = await chai
      .request(App)
      .get('/matches');
    });

    it('retorna o status code 200', async () => {
      expect(chaiHttpResponse).to.have.status(200);
    });

    it('retorna um array', async () => {  
      expect(chaiHttpResponse.body).to.be.an('array');
    });

    it('retorna um array que os elementos são objetos com nomes de times', async () => {  
      expect(chaiHttpResponse.body[0]).to.have.property('teamHome');
      expect(chaiHttpResponse.body[0]).to.have.property('teamAway');
    });
  })

  describe('verifica a rota GET /matches com query', () => {
    before(async () => {
      chaiHttpResponse = await chai
      .request(app)
      .get('/matches?inProgress=true');
    });

    it('retorna o status code 200', async () => {
      expect(chaiHttpResponse).to.have.status(200);
    });

    it('retorna um array', async () => {  
      expect(chaiHttpResponse.body).to.be.an('array');
    });

    it('retorna um array que os elementos são objetos com nomes de times', async () => {  
      expect(chaiHttpResponse.body[0].inProgress).to.be.equal(true);
    });
  })

  describe('verifica a rota POST /matches', () => {
    let validateResponse: Response;
    before(async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
       email: 'user@user.com',
       password: 'secret_user',
     });

     validateResponse = await chai
     .request(app)
     .post('/matches')
     .set('authorization', chaiHttpResponse.body.token)
     .send({
      homeTeam: 16,
      awayTeam: 8,
      homeTeamGoals: 2,
      awayTeamGoals: 2,
    });
    });

    it('retorna o status code 201', async () => {
      expect(validateResponse).to.have.status(201);
    });
    it('retorna um objeto', async () => {
      expect(validateResponse.body).to.be.an('object');
    });
  })

  describe('verifica a rota POST /matches com error team ', () => {
    let validateResponse: Response;
    before(async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
       email: 'user@user.com',
       password: 'secret_user',
     });

     validateResponse = await chai
     .request(app)
     .post('/matches')
     .set('authorization', chaiHttpResponse.body.token)
     .send({
      homeTeam: 16,
      awayTeam: 16,
      homeTeamGoals: 2,
      awayTeamGoals: 2,
    });
    });

    it('retorna o status code 401', async () => {
      expect(validateResponse).to.have.status(422);
    });
    it('retona um objeto com a mensagem', async () => {
      expect(validateResponse.body).to.have.property('message');
    });
  })

  describe('verifica a rota POST /matches sem error team', () => {
    let validateResponse: Response;
    before(async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({
       email: 'user@user.com',
       password: 'secret_user',
     });

     validateResponse = await chai
     .request(app)
     .post('/matches')
     .set('authorization', chaiHttpResponse.body.token)
     .send({
      homeTeam: 100,
      awayTeam: 16,
      homeTeamGoals: 2,
      awayTeamGoals: 2,
    });
    });

    it('retorna status code 404', async () => {
      expect(validateResponse).to.have.status(404);
    });
    it('retona um objeto com a mensagem', async () => {
      expect(validateResponse.body).to.have.property('message');
    });
  })

  describe('verifica a rota PATCH /matches/:id/finish', () => {
    before(async () => {
     chaiHttpResponse = await chai
     .request(app)
     .patch('/matches/45/finish');
    });

    it('retorna o status code 200', async () => {
      expect(chaiHttpResponse).to.have.status(200);
    });
    it('retona um objeto com a mensagem', async () => {
      expect(chaiHttpResponse.body).to.have.property('message');
    });
  })

  describe('verifica a rota PATCH /matches/:id', () => {
    before(async () => {
     chaiHttpResponse = await chai
     .request(app)
     .patch('/matches/1')
     .send({
      homeTeamGoals: 3,
      awayTeamGoals: 1,
      });
    });

    it('retorna o status code 200', async () => {
      expect(chaiHttpResponse).to.have.status(200);
    });
    it('retona um objeto com a mensagem', async () => {
      expect(chaiHttpResponse.body).to.have.property('message');
    });
  })

});