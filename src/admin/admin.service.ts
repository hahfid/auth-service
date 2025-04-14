import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { Ticket } from './entities/ticket.entity';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginAdminDto } from './dto/login-admin.dto';

@Injectable()
export class AdminService {
  private readonly adminUser = { username: 'admin', password: 'admin123' };

  constructor(
    @InjectRepository(Event)
    private eventsRepo: Repository<Event>,
    @InjectRepository(Ticket)
    private ticketsRepo: Repository<Ticket>,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginAdminDto) {
    if (dto.username !== this.adminUser.username || dto.password !== this.adminUser.password) {
      throw new UnauthorizedException('Invalid admin credentials');
    }
    const token = this.jwtService.sign({ username: dto.username, role: 'admin' });
    return { username: dto.username, token };
  }

  async createEvent(dto: CreateEventDto) {
    const event = this.eventsRepo.create(dto);
    await this.eventsRepo.save(event);
    return { id: event.id, title: event.title, date: event.date };
  }

  async updateEvent(id: string, dto: UpdateEventDto) {
    const event = await this.eventsRepo.findOneBy({ id });
    if (!event) throw new NotFoundException('Event not found');
    Object.assign(event, dto);
    await this.eventsRepo.save(event);
    return { id: event.id, title: event.title };
  }

  async deleteEvent(id: string) {
    const res = await this.eventsRepo.delete(id);
    if (res.affected === 0) throw new NotFoundException('Event not found');
    return true;
  }

  async listTickets() {
    const tickets = await this.ticketsRepo.find();
    // join event title and username via separate query or relations (omitted for brevity)
    return tickets.map(t => ({
      ticket_id: t.ticket_id,
      username: t.username,
      event_title: '', // you can load event.title if you set up relation
      quantity: t.quantity,
      status: t.status,
    }));
  }

  async listUsers() {
    // reuse UsersService or repository
    // example raw:
    return await this.eventsRepo.manager.query(
      'SELECT username, name FROM users'
    );
  }
}
