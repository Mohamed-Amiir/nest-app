import { User } from './user.entity';
import { UserResponseDto } from './dto/response.dto';

export class UserMapper {
  static toDto(user: User): UserResponseDto {
    const { id, name, email, age, phone_number } = user;
    return { id, name, email, age, phone_number };
  }

  static toDtoList(users: User[]): UserResponseDto[] {
    return users.map((user) => this.toDto(user));
  }
}
