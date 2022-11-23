import MatchesModel from '../models/MatchesModel';
import IMatch from '../interface/IMatch';

export default class MatchesService {
  public model: MatchesModel;

  constructor() {
    this.model = new MatchesModel();
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
}
