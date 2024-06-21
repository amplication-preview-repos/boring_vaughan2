import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScoreService } from "./score.service";
import { ScoreControllerBase } from "./base/score.controller.base";

@swagger.ApiTags("scores")
@common.Controller("scores")
export class ScoreController extends ScoreControllerBase {
  constructor(protected readonly service: ScoreService) {
    super(service);
  }
}
