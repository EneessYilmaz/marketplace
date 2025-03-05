// app.module.ts: Uygulamanın ana modülü, burada diğer modülleri ve servisleri tanımlayacağız.

import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';

@Module({
  imports: [], // Diğer modüller buraya eklenecek
  controllers: [AppController], // Kontrolörler buraya eklenecek
  providers: [], // Servisler buraya eklenecek
})
export class AppModule {}
