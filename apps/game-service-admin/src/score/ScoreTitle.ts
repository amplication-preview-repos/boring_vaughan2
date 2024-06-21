import { Score as TScore } from "../api/score/Score";

export const SCORE_TITLE_FIELD = "id";

export const ScoreTitle = (record: TScore): string => {
  return record.id?.toString() || String(record.id);
};
