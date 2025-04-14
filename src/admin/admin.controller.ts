import {
    Controller, Post, Body, BadRequestException,
    UseGuards, Get, Patch, Delete, Param,
  } from '@nestjs/common';
  import { AdminService } from './admin.service';
  import { LoginAdminDto } from './dto/login-admin.dto';
  import { CreateEventDto } from './dto/create-event.dto';
  import { UpdateEventDto } from './dto/update-event.dto';
  import { JwtAuthGuard } from '../auth/jwt-auth.guard';
  import { RolesGuard } from '../auth/roles.guard';
  import { Roles } from '../auth/roles.decorator';
  
  @Controller('api/admin')
  export class AdminController {
    constructor(private adminService: AdminService) {}
  
    @Post('login')
    async login(@Body() dto: LoginAdminDto) {
      try {
        const data = await this.adminService.login(dto);
        return { data };
      } catch (e) {
        throw new BadRequestException({ errors: e.message });
      }
    }
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    @Post('events')
    async createEvent(@Body() dto: CreateEventDto) {
      const data = await this.adminService.createEvent(dto);
      return { data };
    }
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    @Patch('events/:id')
    async updateEvent(@Param('id') id: string, @Body() dto: UpdateEventDto) {
      const data = await this.adminService.updateEvent(id, dto);
      return { data };
    }
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    @Delete('events/:id')
    async deleteEvent(@Param('id') id: string) {
      await this.adminService.deleteEvent(id);
      return { data: true, message: 'Event deleted successfully' };
    }
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    @Get('tickets')
    async listTickets() {
      const data = await this.adminService.listTickets();
      return { data };
    }
  
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin')
    @Get('users')
    async listUsers() {
      const data = await this.adminService.listUsers();
      return { data };
    }
  }
  