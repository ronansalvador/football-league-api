import MatchesModel from '../models/MatchesModel';
import TeamsService from './TeamService';
import IMatch from '../interface/IMatch';

interface MatchResponse {
  status: number;
  message?: string;
  result?: IMatch;
}
export default class MatchesService {
  public model: MatchesModel;
  public teamsModel: TeamsService;

  constructor() {
    this.model = new MatchesModel();
    this.teamsModel = new TeamsService();
  }

  public async findAll(inProgress: string): Promise<IMatch[]> {
    if (inProgress) {
      const inProgressBool = JSON.parse(inProgress as string);
      const result = await this.model.queryAll(inProgressBool);
      return result;
    }
    const result = await this.model.findAll();
    return result;
  }

  public async create(match: IMatch): Promise<MatchResponse> {
    if (match.homeTeam === match.awayTeam) {
      return {
        status: 401,
        message: 'It is not possible to create a match with two equal teams',
      };
    }

    const checkHomeTeam = await this.teamsModel.findByPk(match.homeTeam);
    const checkAwayTeam = await this.teamsModel.findByPk(match.awayTeam);
    if (!checkHomeTeam || !checkAwayTeam) {
      return {
        status: 404,
        message: 'There is no team with such id!',
      };
    }

    const result = await this.model.create(match);
    return { status: 201, result };
  }
}
