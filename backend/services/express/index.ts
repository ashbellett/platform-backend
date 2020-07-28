import { PORT } from '../secrets';
import apollo from '../apollo';

import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import path from 'path';

const app = express();

app.set('port', parseInt(PORT) || 4000);

app.use(helmet());
app.use(compression());

apollo.applyMiddleware({ app });

export default app;
