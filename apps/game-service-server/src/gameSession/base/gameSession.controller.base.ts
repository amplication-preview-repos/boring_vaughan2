/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GameSessionService } from "../gameSession.service";
import { GameSessionCreateInput } from "./GameSessionCreateInput";
import { GameSession } from "./GameSession";
import { GameSessionFindManyArgs } from "./GameSessionFindManyArgs";
import { GameSessionWhereUniqueInput } from "./GameSessionWhereUniqueInput";
import { GameSessionUpdateInput } from "./GameSessionUpdateInput";

export class GameSessionControllerBase {
  constructor(protected readonly service: GameSessionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GameSession })
  async createGameSession(
    @common.Body() data: GameSessionCreateInput
  ): Promise<GameSession> {
    return await this.service.createGameSession({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [GameSession] })
  @ApiNestedQuery(GameSessionFindManyArgs)
  async gameSessions(@common.Req() request: Request): Promise<GameSession[]> {
    const args = plainToClass(GameSessionFindManyArgs, request.query);
    return this.service.gameSessions({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GameSession })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async gameSession(
    @common.Param() params: GameSessionWhereUniqueInput
  ): Promise<GameSession | null> {
    const result = await this.service.gameSession({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: GameSession })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateGameSession(
    @common.Param() params: GameSessionWhereUniqueInput,
    @common.Body() data: GameSessionUpdateInput
  ): Promise<GameSession | null> {
    try {
      return await this.service.updateGameSession({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: GameSession })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteGameSession(
    @common.Param() params: GameSessionWhereUniqueInput
  ): Promise<GameSession | null> {
    try {
      return await this.service.deleteGameSession({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
