import * as graphql from "@nestjs/graphql";
import { ScoreResolverBase } from "./base/score.resolver.base";
import { Score } from "./base/Score";
import { ScoreService } from "./score.service";

@graphql.Resolver(() => Score)
export class ScoreResolver extends ScoreResolverBase {
  constructor(protected readonly service: ScoreService) {
    super(service);
  }
}
