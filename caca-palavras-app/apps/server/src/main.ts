/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { SerialPort } from 'serialport';
import { DelimiterParser } from '@serialport/parser-delimiter';
import * as express from 'express';
import * as cors from 'cors';
import { Server } from 'socket.io';

const app = express();
app.use(cors());
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to server!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:4200',
  },
});

io.on('connect', () => console.log('Browser connected!'));

const central = new SerialPort({
  path: 'COM4',
  baudRate: 9600,
});
const parserCentral = central.pipe(new DelimiterParser({ delimiter: '#' }));
parserCentral.on('data', (data) => {
  console.log('parserCentral.on', data.toString());
  io.emit('command', {
    player: 0,
    payload: data.toString(),
  });
});

const termOne = new SerialPort({
  path: 'COM6',
  baudRate: 4800,
});
const parserTermOne = termOne.pipe(new DelimiterParser({ delimiter: '#' }));
parserTermOne.on('data', (data) => {
  console.log('parserTermOne.on', data.toString());
  io.emit('command', {
    player: 1,
    payload: data.toString(),
  });
});

const termTwo = new SerialPort({
  path: 'COM8',
  baudRate: 4800,
});
const parserTermTwo = termTwo.pipe(new DelimiterParser({ delimiter: '#' }));
parserTermTwo.on('data', (data) => {
  console.log('parserTermTwo.on', data.toString());
  io.emit('command', {
    player: 2,
    payload: data.toString(),
  });
});
