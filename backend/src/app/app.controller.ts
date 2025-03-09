import { Controller, Get } from '@nestjs/common';

@Controller('apps')
export class AppController {
  @Get()  // ✅ Parantezler olmalı!
  getHello(): string {
    return 'Hello Worldss!';
  }
}
