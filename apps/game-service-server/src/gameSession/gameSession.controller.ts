import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GameSessionService } from "./gameSession.service";
import { GameSessionControllerBase } from "./base/gameSession.controller.base";

@swagger.ApiTags("gameSessions")
@common.Controller("gameSessions")
export class GameSessionController extends GameSessionControllerBase {
  constructor(protected readonly service: GameSessionService) {
    super(service);
  }
}
