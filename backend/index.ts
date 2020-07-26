// Environment variables
import dotenv from 'dotenv';
dotenv.config();

// Modules
import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
// import mongoose from 'mongoose';
// import passport from 'passport';
import path from 'path';
// import session from 'express-session';

// Interfaces
import { Express } from 'express';

// Local variables
const { HOST, PORT } = process.env;
const app: Express = express();

// Settings
app.set('port', PORT || 4000);

// Middleware
app.use(helmet());
app.use(compression());
app.use('/', express.static(path.join(__dirname, './frontend')));

app.listen(app.get('port'), () => {
    console.log(HOST || 'http://localhost' + ':%d', app.get('port'));
});
