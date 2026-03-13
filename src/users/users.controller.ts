import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/createuser.dto';
// import { UpdateUserDto } from './dto/updateuser.dto';
import { UserResponseDto } from './dto/response.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserResponseDto> {
    return this.usersService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: { name: string }) {
    return this.usersService.updateName(Number(id), body.name);
  }

  @Post()
  create(
    @Body()
    dto: CreateUserDto,
  ): Promise<UserResponseDto> {
    return this.usersService.createUser(dto);
  }
}
