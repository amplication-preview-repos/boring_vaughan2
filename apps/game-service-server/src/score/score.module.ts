import { Module } from "@nestjs/common";
import { ScoreModuleBase } from "./base/score.module.base";
import { ScoreService } from "./score.service";
import { ScoreController } from "./score.controller";
import { ScoreResolver } from "./score.resolver";

@Module({
  imports: [ScoreModuleBase],
  controllers: [ScoreController],
  providers: [ScoreService, ScoreResolver],
  exports: [ScoreService],
})
export class ScoreModule {}
