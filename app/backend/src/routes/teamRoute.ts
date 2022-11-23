import { Router } from 'express';
import TeamsController from '../controllers/TeamController';

const teamRoute = Router();
const teamsController = new TeamsController();

teamRoute.get('/', teamsController.findAll);
teamRoute.get('/:id', teamsController.findByPk);

export default teamRoute;
