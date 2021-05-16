import { IncomingMessage, ServerResponse } from 'http';
import { controller } from './controller';
import { Socket } from 'net';

describe('controller', () => {
  let req: IncomingMessage;
  let res: ServerResponse;
  beforeEach(async () => {
    req = new IncomingMessage(new Socket({}));
    res = new ServerResponse(req);
  });

  describe('controller', () => {
    it('should return "Hello World!"', () => {
      const response = controller(req, res);
      expect(response.statusCode).toBe(200);
      expect(response.getHeader('Content-Type')).toBe('text/plain');
      const chunks = [];
      response.on('data', (chunk) => {
        chunks.push(chunk);
      });
      response.on('end', () => {
        const body = Buffer.concat(chunks);
        expect(body).toBe('Hello World');
      });
    });
  });
});
