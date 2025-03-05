// app.module.ts: Uygulamanın ana modülü, burada diğer modülleri ve servisleri tanımlayacağız.

import { Module } from '@nestjs/common';

@Module({
  imports: [], // Diğer modüller buraya eklenecek
  controllers: [], // Kontrolörler buraya eklenecek
  providers: [], // Servisler buraya eklenecek
})
export class AppModule {}
