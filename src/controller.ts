import { IncomingMessage, ServerResponse } from 'http';

export function controller(
  _req: IncomingMessage,
  res: ServerResponse,
): ServerResponse {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
  return res;
}
