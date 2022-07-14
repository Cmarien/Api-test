import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { getMetadataStorage } from 'class-validator';
import { Request } from 'express';
import { AuthenticateGuard } from 'src/auth/guard/42.guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetUser } from '../auth/decorator';
import { User42Dto } from './dto/User42.dto';
import { UserService } from './user.service';

@UseGuards(AuthenticateGuard)
@Controller('users')
export class UserController {
    constructor(
        private userService: UserService,
        private prisma: PrismaService) {}

    @Patch('add_friend')
    AddFriend(
        @Req() req: Request,
        @Body() friendId: any,
    ) {
        const userId = req.user['school_id']
        // friendId = 5;
        if(req.user['friends'].includes(friendId)){
            return "Already Friends";
        }
        return this.userService.AddFriend(userId, friendId);
    }

    @Patch('remove_friend')
    RemoveFriend(
        @Req() req: Request,
        @Body() friendId: any,
    ) {
        const userId = req.user['school_id']
        // friendId = 5;
        if(req.user['friends'].includes(friendId)){
            return this.userService.RemoveFriend(userId, friendId);
        }
        return "Not Friends";
    }

    @Get('see_status')
    SeeStatus(
        @Req() req: Request,
        @Body() targetId: any,
    ) {
        const userId = req.user['school_id']
        targetId = userId;
        if (req.user['friends'].includes(targetId) || userId == targetId){
            return this.userService.SeeStatus(targetId);
        }
        return "Not Your Friend";
    }
}