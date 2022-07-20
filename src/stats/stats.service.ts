import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StatsService {
    constructor(
        private prisma: PrismaService
    ) {}

    async AddWin(userId: number) {
        await this.prisma.stats.update({
            where: {
                UserId: userId,
            },
            data: {
                wins: {increment: 1}
            },
        });
    }

    async AddLoss(userId: number) {
        await this.prisma.stats.update({
            where: {
                UserId: userId,
            },
            data: {
                losses: {increment: 1}
            },
        });
    }

    async UpdateLadderLevel(userId: number, value: number) {
        await this.prisma.stats.update({
            where: {
                UserId: userId,
            },
            data: {
                ladder_level: {increment: value}
            },
        });
    }
}
