import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middleware/logger/logger.middleware';
import { urlencoded, json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(json()); // For parsing application/json
  app.use(urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
  app.use(logger);
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
