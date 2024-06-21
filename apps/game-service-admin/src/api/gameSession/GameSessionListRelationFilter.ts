import { GameSessionWhereInput } from "./GameSessionWhereInput";

export type GameSessionListRelationFilter = {
  every?: GameSessionWhereInput;
  some?: GameSessionWhereInput;
  none?: GameSessionWhereInput;
};
