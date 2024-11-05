// src/health/health.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthCheckService {
    checkHealth(): { status: string } {
        return { status: 'OK fineeeee' }; // Return a simple health status
    }
}
