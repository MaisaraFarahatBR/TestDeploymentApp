// src/health/health.controller.ts

import { Controller, Get } from '@nestjs/common';
import { HealthCheckService } from './health-check.service';

@Controller('health')
export class HealthCheckController {
    constructor(private readonly healthCheckService: HealthCheckService) {}

    @Get()
    getHealth(): { status: string } {
        return this.healthCheckService.checkHealth(); // Call the service to get health status
    }
}
