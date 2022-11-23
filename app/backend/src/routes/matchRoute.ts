import { Router } from 'express';
import MatchesController from '../controllers/MatchesController';

const matchRoute = Router();
const matchesController = new MatchesController();

matchRoute.get('/', matchesController.findAll);

export default matchRoute;
