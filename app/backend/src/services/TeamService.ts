import TeamsModel from '../database/models/TeamModel';
import ITeam from '../interface/ITeam';

export default class TeamsService {
  public model = TeamsModel;

  public async findAll(): Promise<ITeam[]> {
    const result = await this.model.findAll();
    return result;
  }
}
