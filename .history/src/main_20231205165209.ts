import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1');
  app.enableCors();
  app.useStaticAssets(__dirname,, {})
  await app.listen(3000);
}
bootstrap();
