import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('tickets')
export class Ticket {
  @PrimaryColumn()
  ticket_id: string;

  @Column()
  username: string;

  @Column()
  event_id: string;

  @Column('int')
  quantity: number;

  @Column()
  status: 'booked' | 'cancelled';
}
