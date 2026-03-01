import { test, expect, describe, beforeAll, afterAll } from 'vitest';
import Fastify from 'fastify';
import telemetryRoutes from '../routes/telemetry.js';
import { db } from '../lib/db.js';

describe('Telemetry API Integration', () => {
  let app: any;

  beforeAll(async () => {
    app = Fastify();
    await app.register(telemetryRoutes);
  });

  afterAll(async () => {
    await app.close();
  });

  test('POST /telemetry/event should record an event', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/telemetry/event',
      payload: {
        type: 'feature_use',
        event: 'test.event',
        value: 1,
        metadata: { foo: 'bar' },
        version: '1.0.1'
      }
    });

    expect(response.statusCode).toBe(200);
    const body = JSON.parse(response.body);
    expect(body.success).toBe(true);

    // Verify in DB
    const event = await db.telemetryEvent.findFirst({
      where: { event: 'test.event' }
    });
    expect(event).toBeDefined();
    expect(event?.type).toBe('feature_use');
  });

  test('GET /telemetry/stats should return data', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/telemetry/stats'
    });

    expect(response.statusCode).toBe(200);
    const body = JSON.parse(response.body);
    expect(body.stats).toBeDefined();
    expect(body.recentEvents).toBeDefined();
  });
});
