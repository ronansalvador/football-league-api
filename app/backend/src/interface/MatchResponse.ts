import IMatch from './IMatch';

export default interface MatchResponse {
  status: number;
  message?: string;
  result?: IMatch;
}
