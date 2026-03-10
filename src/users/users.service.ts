import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // database connection
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      name: 'Mary Smith',
      email: 'mary.smith@example.com',
    },
    {
      id: 3,
      name: 'John Smith',
      email: 'john.smith@example.com',
    },
  ];

  findAll() {
    return this.userRepository.find();
  }
  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }
  updateName(id: number, name: string) {
    return this.userRepository.update(id, { name });
  }
  createUser(
    name: string,
    email: string,
    password: string,
    phone_number: string,
    age: number,
  ) {
    const user = this.userRepository.create({
      name,
      email,
      password,
      phone_number,
      age,
    });
    return this.userRepository.save(user);
  }
}
