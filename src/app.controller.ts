import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    console.log('debug: getHello');
    return this.appService.getHello();
  }

  // @UseGuards(AuthGuard('local'))
  @UseGuards(LocalAuthGuard) // validates username and password
  @Post('auth/login')
  async login(@Request() req) {
    console.log('debug0 auth/login');
    console.log('debug1 auth/login', req.user);
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard) // validates jwt token
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
