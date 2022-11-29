import { Router } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';

const leaderboardRoute = Router();
const leaderboardController = new LeaderboardController();

leaderboardRoute.get('/home', leaderboardController.findAllHome);
leaderboardRoute.get('/away', leaderboardController.findAllAway);

export default leaderboardRoute;
