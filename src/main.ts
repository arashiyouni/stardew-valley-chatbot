import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import express from 'express';
import { Request, Response } from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';

const expressApp = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  app.enableCors();
  await app.init();
  // await app.listen(3000);
}
bootstrap();

export const handler = (req: Request, res: Response) => {
  expressApp(req, res);
};