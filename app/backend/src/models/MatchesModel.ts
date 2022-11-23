import Team from '../database/models/TeamModel';
import matchModel from '../database/models/MatchModel';
import IMatch from '../interface/IMatch';

export default class MatchesModel {
  public model = matchModel;

  public async findAll(): Promise<IMatch[]> {
    const result = await this.model.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    // console.log(result, 'match result');
    return result;
  }

  public async queryAll(inProgress: boolean): Promise<IMatch[]> {
    const result = await this.model.findAll({
      where: { inProgress },
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return result;
  }
}
