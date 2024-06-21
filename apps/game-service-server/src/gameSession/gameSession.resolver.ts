import * as graphql from "@nestjs/graphql";
import { GameSessionResolverBase } from "./base/gameSession.resolver.base";
import { GameSession } from "./base/GameSession";
import { GameSessionService } from "./gameSession.service";

@graphql.Resolver(() => GameSession)
export class GameSessionResolver extends GameSessionResolverBase {
  constructor(protected readonly service: GameSessionService) {
    super(service);
  }
}
