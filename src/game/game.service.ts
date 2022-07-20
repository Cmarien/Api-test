import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto';

@Injectable()
export class GameService {
    constructor (
        private prisma: PrismaService
    ) {}

    async CreateGame(userId: number, dto: CreateGameDto) {
        await this.prisma.game.create({
            data: {
                ...dto,
            },
        });
    }
}
