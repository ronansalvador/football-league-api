import { Router } from 'express';
import MatchesController from '../controllers/MatchesController';
import auth from '../middlewares/Auth';

const matchRoute = Router();
const matchesController = new MatchesController();

matchRoute.get('/', matchesController.findAll);
matchRoute.post('/', auth.tokenValidation, matchesController.create);

export default matchRoute;
