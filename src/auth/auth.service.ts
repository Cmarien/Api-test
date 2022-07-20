import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { User42Dto } from "src/user/dto/User42.dto";

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
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
                    unique_name:    dto.unique_name,
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
            const stats = await this.prisma.stats.create({
                data: {
                    UserId:         dto.id,
                    wins:           0,
                    losses:         0,
                    ladder_level:   0,
                }
            })
            return ret;
        }
        catch (error){
            throw error;
        }
    }
}