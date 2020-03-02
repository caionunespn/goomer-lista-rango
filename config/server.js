import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import setRoutes from './routes';

const server = express();
server.use(cors());
server.use(helmet());
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json());

setRoutes(server);

export default server;