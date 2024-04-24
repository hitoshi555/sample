import { Body, Controller, Post, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiOkResponse, ApiBasicAuth } from '@nestjs/swagger';
import { RequestLogin, RequestProfile, ResponseLogin, ResponseStudent } from './auth.dto';


@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) { }

    @UseGuards(AuthGuard('local')) // passport-local戦略を付与する
    @Post('login')
    @ApiBody({ type: RequestLogin })
    @ApiOkResponse({ type: ResponseLogin })
    async login(@Body() req: RequestLogin) {
        console.log('login start');
        console.log('login req:', req);
        // LocalStrategy.validate()で認証して返した値がreq.userに入ってる
        const user = req;
        console.log('login user:', user);
        // JwtToken を返す
        console.log('login end');
        const result = this.authService.login(user);
        return result;
    }

    /**
     * @description JWT認証を用いたサンプルAPI
     */
    @UseGuards(AuthGuard('jwt')) // passport-jwt戦略を付与する
    @ApiBasicAuth()
    @Get('profile')
    @ApiBody({ type: RequestProfile })
    @ApiOkResponse({ type: ResponseStudent })
    getProfile(@Body() req: { user: RequestProfile }) {
        // 認証に成功したユーザーの情報を返す
        return req;
    }
}
