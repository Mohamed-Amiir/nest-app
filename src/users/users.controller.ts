import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: { name: string }) {
    return this.usersService.updateName(Number(id), body.name);
  }

  @Post()
  create(
    @Body()
    body: {
      name: string;
      email: string;
      password: string;
      phone_number: string;
      age: number;
    },
  ) {
    return this.usersService.createUser(
      body.name,
      body.email,
      body.password,
      body.phone_number,
      body.age,
    );
  }
}
