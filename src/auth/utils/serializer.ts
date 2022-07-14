import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport'
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(private prisma: PrismaService) {
        super()
    }

    serializeUser(user: User, done: (err: Error, user: User) => void) {
        done(null, user);
    }

    async deserializeUser(user: User, done: (err: Error, user: User) => void) {
        const userDb = await this.prisma.user.findUnique({
            where: {
                school_id: user.school_id,
            },
        });
        return userDb ? done(null, userDb) : done(null, null);
    }
}