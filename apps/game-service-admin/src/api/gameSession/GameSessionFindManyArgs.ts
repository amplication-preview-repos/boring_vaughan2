import { GameSessionWhereInput } from "./GameSessionWhereInput";
import { GameSessionOrderByInput } from "./GameSessionOrderByInput";

export type GameSessionFindManyArgs = {
  where?: GameSessionWhereInput;
  orderBy?: Array<GameSessionOrderByInput>;
  skip?: number;
  take?: number;
};
