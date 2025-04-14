import {
    Controller, Post, Body, BadRequestException,
    UseGuards, Get, Patch, Delete, Req,
  } from '@nestjs/common';
  import { UsersService } from './users.service';
  import { RegisterUserDto } from './dto/register-user.dto';
  import { LoginUserDto } from './dto/login-user.dto';
  import { AuthService } from '../auth/auth.service';
  import { JwtAuthGuard } from '../auth/jwt-auth.guard';
  import { UpdateUserDto } from './dto/update-user.dto';
  
  @Controller('api/users')
  export class UsersController {
    constructor(
      private usersService: UsersService,
      private authService: AuthService,
    ) {}
  
    @Post()
    async register(@Body() dto: RegisterUserDto) {
      try {
        const data = await this.usersService.register(dto);
        return { data };
      } catch (e) {
        throw new BadRequestException({ errors: e.message });
      }
    }
  
    @Post('login')
    async login(@Body() dto: LoginUserDto) {
      const user = await this.authService.validateUser(dto.username, dto.password);
      if (!user) {
        throw new BadRequestException({ errors: 'Username or password is wrong' });
      }
      const result = await this.authService.login(user);
      return { data: result };
    }
  
    @UseGuards(JwtAuthGuard)
    @Get('current')
    async getCurrent(@Req() req) {
      // req.user from JwtStrategy.validate
      return { data: req.user };
    }
  
    @UseGuards(JwtAuthGuard)
    @Patch('current')
    async updateCurrent(@Req() req, @Body() dto: UpdateUserDto) {
      const data = await this.usersService.update(req.user.username, dto);
      return { data };
    }
  
    @UseGuards(JwtAuthGuard)
    @Delete('current')
    async logout() {
      // Dengan JWT stateless, logout di client-side saja:
      return { data: true };
    }
  }
  