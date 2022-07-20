import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthenticateGuard } from 'src/auth/guard/42.guard';
import { CreateGameDto } from './dto'
import { Request } from 'express'
import { GameService } from './game.service';

@UseGuards(AuthenticateGuard)
@Controller('game')
export class GameController {
    constructor(
        private gameService: GameService
    ) {}

    @Post('create_game')
    createGame(
        @Req() req: Request,
        @Body() dto: CreateGameDto,
    ) {
        const userId = req.user['school_id'];
        return this.gameService.CreateGame(userId, dto)
    }
}
