import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createuser.dto';
// import { UpdateUserDto } from './dto/updateuser.dto';
import { UserResponseDto } from './dto/response.dto';
import { UserMapper } from './mapper';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find();
  }
  async findOne(id: number): Promise<UserResponseDto> {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) {
      throw new Error('User not found');
    } else {
      return UserMapper.toDto(user);
    }
  }
  updateName(id: number, name: string) {
    return this.userRepository.update(id, { name });
  }
  createUser(dto: CreateUserDto): Promise<UserResponseDto> {
    const user = this.userRepository.create({
      name: dto.name,
      email: dto.email,
      password: dto.password,
      phone_number: dto.phone_number,
      age: dto.age,
    });
    return this.userRepository.save(user);
  }
}
