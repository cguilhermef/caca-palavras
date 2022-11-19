/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { SerialPort } from "serialport";
import { DelimiterParser } from '@serialport/parser-delimiter';
import * as express from 'express';
import { Server } from 'socket.io';

const app = express();
const comm = new SerialPort({
  path: 'COM6',
  baudRate: 4800,
});
const parser = comm.pipe(new DelimiterParser({ delimiter: '#' }));
parser.on('data', (data) => console.log(data.toString()));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to server!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
const io = new Server(server);
io.on('connection', (socket) => {
  console.log('a user connected');
});
