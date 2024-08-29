// lib
import express from 'express';
import 'dotenv/config';
import fs from 'fs';
import YAML from 'yaml';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
// src
import config from './src/config/index.js';
import { db as connectDB } from './src/utils/index.js';
import router from './src/controller/router.js';

const app = express();

connectDB();

const swaggerDocument = YAML.parse(fs.readFileSync('./swagger.yaml', 'utf8'));
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*'
}));
app.use(router);

app.get('/', function (req, res) {
    res.send('HELLO ' + config.appName);
});

app.get('/health-check', function (req, res) {
    res.send({'status': 'UP'});
});


app.listen(process.env.APP_PORT, function () {
    console.log(`app running on port ${process.env.APP_PORT}`)    
});