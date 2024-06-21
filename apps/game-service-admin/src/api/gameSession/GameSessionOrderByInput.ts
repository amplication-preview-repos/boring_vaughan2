import { SortOrder } from "../../util/SortOrder";

export type GameSessionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
