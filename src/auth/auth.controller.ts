import { Controller, Delete, Get, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request } from 'express'
import { AuthenticateGuard, FortyTwoGuard } from "./guard/42.guard";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Get('login')
    @UseGuards(FortyTwoGuard)
    login() {}

    @Get('redirect')
    @UseGuards(FortyTwoGuard)
    redirect() {
        return "oui"
    }

    @Get('test')
    @UseGuards(AuthenticateGuard)
    testfunct() {
        return "NON"
    }

    @Get('logout')
    @UseGuards(AuthenticateGuard)
    logout(@Req() req: Request) {
        req.session.destroy(Error);
        //Try to revoke access_token from 42 and then redirect to login page
    }
}