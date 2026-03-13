import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './createuser.dto';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
class UpdateUserDto extends PartialType(CreateUserDto) {}

export { UpdateUserDto };
