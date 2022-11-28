import { RequestHandler } from 'express';
import LeaderboardService from '../services/LeaderBoardService';

export default class LeaderboardController {
  constructor(private service = new LeaderboardService()) { }

  public findAllHome:RequestHandler = async (_req, res) => {
    const result = await this.service.findAllHome();
    return res.status(200).json(result);
  };
}
