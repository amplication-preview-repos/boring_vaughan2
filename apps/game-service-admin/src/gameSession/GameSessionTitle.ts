import { GameSession as TGameSession } from "../api/gameSession/GameSession";

export const GAMESESSION_TITLE_FIELD = "id";

export const GameSessionTitle = (record: TGameSession): string => {
  return record.id?.toString() || String(record.id);
};
