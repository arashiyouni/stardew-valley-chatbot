import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import express from 'express';

const expressApp = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.init();
  // await app.listen(3000);
}
bootstrap();
export const handler = (req, res) => {
  expressApp(req, res);
};