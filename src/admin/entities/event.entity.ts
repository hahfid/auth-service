import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column('date')
  date: string;

  @Column()
  location: string;

  @Column('int')
  price: number;

  @Column('int')
  ticket_quota: number;
}
