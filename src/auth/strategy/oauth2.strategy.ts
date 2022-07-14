import { Injectable, Param, ParseIntPipe } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { access } from "fs";
import { Strategy, Profile } from "passport-42"
import { PrismaService } from "src/prisma/prisma.service";
import { User42Dto } from "src/user/dto/User42.dto";
import { AuthService } from "../auth.service";

@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService, private prismaService: PrismaService) {
        super({
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: process.env.REDIRECT,
            scope: 'public'
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile) {
        const user: User42Dto = {
            id:                 Number(profile.id),
            username:           profile.username,
            displayName:        profile.displayName,
            first_name:         profile['name']['givenName'],
            last_name:          profile['name']['familyName'],
            profileUrl:         profile.profileUrl,
            email:              profile['emails'][0]['value'],
            photo:              profile['photos'][0]['value'],
        }
        return this.authService.validateUser(user);
    }
}