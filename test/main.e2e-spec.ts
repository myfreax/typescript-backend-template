import * as request from 'supertest';
import { createServer, Server } from 'http';
import { controller } from '../src/controller';

describe('Controller (e2e)', () => {
  let server: Server;

  beforeAll(async () => {
    server = createServer(controller);
  });

  afterAll(() => {
    server.close();
  });

  it('/ (GET)', () => {
    return request(server).get('/').expect(200).expect('Hello World');
  });
});
