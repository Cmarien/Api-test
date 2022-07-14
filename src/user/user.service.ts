import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(
        private prisma: PrismaService,
        ) {}

        async AddFriend(userId: number, friendId: any) {
            const friend = Number(friendId);
            await this.prisma.user.update({
                where: {
                    school_id: userId,
                },
                data: {
                    friends: {
                        push: friend,
                    },
                },
            });
        }

        async RemoveFriend(userId: number, friendId: any) {
            const friend = Number(friendId);
            const user = await this.prisma.user.findUnique({
                where: {
                    school_id: userId,
                },
            });
            user.friends.splice(user.friends.indexOf(friendId), 1);
            const updated_friend_list = user.friends;
            console.log(updated_friend_list);
            await this.prisma.user.update({
                where: {
                    school_id: userId,
                },
                data: {
                    friends: {
                        set: updated_friend_list,
                    },
                },
            });
        }

        async SeeStatus(userId: any) {
            const id = Number(userId);

            const user = await this.prisma.user.findUnique({
                where: {
                    school_id: id,
                },
            });
            return user.status;
        }
}
