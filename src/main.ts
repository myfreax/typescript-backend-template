import { createServer } from 'http';
import { controller } from './controller';
const hostname = '127.0.0.1';
const port = 3000;

const server = createServer(controller);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
