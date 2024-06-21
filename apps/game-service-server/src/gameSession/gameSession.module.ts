import { Module } from "@nestjs/common";
import { GameSessionModuleBase } from "./base/gameSession.module.base";
import { GameSessionService } from "./gameSession.service";
import { GameSessionController } from "./gameSession.controller";
import { GameSessionResolver } from "./gameSession.resolver";

@Module({
  imports: [GameSessionModuleBase],
  controllers: [GameSessionController],
  providers: [GameSessionService, GameSessionResolver],
  exports: [GameSessionService],
})
export class GameSessionModule {}
