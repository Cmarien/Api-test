import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express'
import { AuthenticateGuard } from 'src/auth/guard/42.guard';
import { StatsService } from './stats.service';

@UseGuards(AuthenticateGuard)
@Controller('stats')
export class StatsController {
    constructor(private statsService: StatsService) {}

    @Patch('add_win')
    AddWin(
        @Req() req: Request,
    ) {
        const userId = req.user['school_id'];
        return this.statsService.AddWin(userId);
    }

    @Patch('add_loss')
    AddLoss(
        @Req() req: Request,
    ) {
        const userId = req.user['school_id'];
        return this.statsService.AddLoss(userId);
    }

    @Patch('update_ladder')
    UpdateLadderLevel(
        @Req() req: Request,
        @Body() val: any,
    ) {
        const value = Number(val);
        const userId = req.user['school_id'];
        return this.statsService.UpdateLadderLevel(userId, value);
    }
}
