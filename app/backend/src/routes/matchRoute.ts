import { Router } from 'express';
import MatchesController from '../controllers/MatchesController';
import auth from '../middlewares/Auth';

const matchRoute = Router();
const matchesController = new MatchesController();

matchRoute.get('/', matchesController.findAll);
matchRoute.post('/', auth.tokenValidation, matchesController.create);
matchRoute.patch('/:id/finish', matchesController.finishMatch);
matchRoute.patch('/:id', matchesController.updateMatch);

export default matchRoute;
