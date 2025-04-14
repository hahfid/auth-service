import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { RegisterUserDto } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  async register(dto: RegisterUserDto) {
    // Ubah di sini:
    const exists = await this.usersRepo.findOneBy({ username: dto.username });
    if (exists) throw new ConflictException('Username already registered');

    const user = this.usersRepo.create({
      username: dto.username,
      password: await bcrypt.hash(dto.password, 10),
      name: dto.name,
    });
    await this.usersRepo.save(user);
    const { password, ...data } = user;
    return data;
  }

  async findOne(username: string) {
    // Dan di sini:
    return this.usersRepo.findOneBy({ username });
  }

  async update(username: string, dto: UpdateUserDto) {
    // ... tetap sama sampai:
    const user = await this.usersRepo.findOneBy({ username });
    if (!user) throw new NotFoundException();
    if (dto.password) {
      user.password = await bcrypt.hash(dto.password, 10);
    }
    if (dto.name) user.name = dto.name;
    await this.usersRepo.save(user);
    const { password, ...data } = user;
    return data;
  }
}
