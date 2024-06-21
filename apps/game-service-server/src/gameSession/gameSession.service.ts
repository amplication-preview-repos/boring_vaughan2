import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameSessionServiceBase } from "./base/gameSession.service.base";

@Injectable()
export class GameSessionService extends GameSessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
