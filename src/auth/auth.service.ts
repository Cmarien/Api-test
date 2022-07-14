import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { User42Dto } from "src/user/dto/User42.dto";

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService,
        ){}


    login() {}

    async validateUser(dto: User42Dto) {
        const user = await this.prisma.user.findUnique({
            where: {
                school_id: dto.id,
            },
        });
        if (user) {
            return user;
        }
        try{
            const ret = await this.prisma.user.create({
                data: {
                    school_id:      dto.id,
                    username:       dto.username,
                    displayName:    dto.displayName,
                    first_name:     dto.first_name,
                    last_name:      dto.last_name,
                    profileUrl:     dto.profileUrl,
                    email:          dto.email,
                    photo:          dto.photo,
                    status:         "online",
                },
            });
            return ret;
        }
        catch (error){
            throw error;
        }
    }
}