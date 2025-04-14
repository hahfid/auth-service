import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { Event } from './entities/event.entity';
import { Ticket } from './entities/ticket.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Event, Ticket]),
    forwardRef(() => AuthModule),
  ],
  providers: [AdminService],
  controllers: [AdminController],
})
export class AdminModule {}
