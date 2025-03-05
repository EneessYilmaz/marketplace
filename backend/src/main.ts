// main.ts: Uygulamanın giriş noktası.
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; // '../app.module' yerine './app.module' olacak


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000); // Uygulama 3000 portunda dinleyecek
}
bootstrap();
