import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as dotenv from 'dotenv';
dotenv.config();


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 4000;
  await app.listen(port,'0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`Press CTRL+C to stop it`);
}
bootstrap();

