import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'BINGOOOO I AM IN PRODUCTION';
  }
}
