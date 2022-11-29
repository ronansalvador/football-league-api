import { Router } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';

const leaderboardRoute = Router();
const leaderboardController = new LeaderboardController();

leaderboardRoute.get('/home', leaderboardController.findAllHome);
leaderboardRoute.get('/away', leaderboardController.findAllAway);
leaderboardRoute.get('/', leaderboardController.findAll);

export default leaderboardRoute;
