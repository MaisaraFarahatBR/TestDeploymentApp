// src/app.module.ts

import { Module } from '@nestjs/common';
import { HealthModule } from './health.module';

@Module({
  imports: [HealthModule], // Import the HealthModule here
})
export class AppModule {}
