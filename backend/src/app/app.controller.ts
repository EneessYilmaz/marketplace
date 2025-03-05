import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get()  // ✅ Parantezler olmalı!
  getHello(): string {
    return 'Hello World!';
  }
}
