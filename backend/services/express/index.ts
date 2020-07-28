import { PORT, GRAPHQL_ENDPOINT } from '../secrets';
import apollo from '../apollo';

import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import passport from 'passport';
import session from 'express-session';

const app = express();

app.set('port', parseInt(PORT) || 4000);

app.use(helmet());
app.use(compression());

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(GRAPHQL_ENDPOINT, (request, response, next) => {
    console.log(request.session, request.sessionID);
    return next();
});

apollo.applyMiddleware({ app, path: GRAPHQL_ENDPOINT });

export default app;
