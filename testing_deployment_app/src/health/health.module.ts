import { Module } from '@nestjs/common';
import { HealthCheckController } from './health-check/health-check.controller';
import { HealthCheckService } from './health-check/health-check.service';

@Module({
  controllers: [HealthCheckController],
  providers: [HealthCheckService]
})
export class HealthModule {}
