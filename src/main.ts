import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middleware/logger/logger.middleware';
import { TransformInterceptor } from './interceptor/transform/transform.interceptor';
import { HttpExceptionFilter } from './filter/http-exception/http-exception.filter';
import { urlencoded, json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(json()); // For parsing application/json
  app.use(urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
  app.use(logger);
  app.useGlobalInterceptors(new TransformInterceptor());
  app.setGlobalPrefix('api');
  // 过滤处理 HTTP 异常
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
