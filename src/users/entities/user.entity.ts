import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryColumn()
  username: string;

  @Column()
  password: string; // sudah di-hash

  @Column()
  name: string;
}
