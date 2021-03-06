import { PORT, GRAPHQL_ENDPOINT } from '../secrets';

import { apollo } from '.';
import { passport } from '../middleware';
import { session } from '../middleware';

import compression from 'compression';
import express from 'express';
import helmet from 'helmet';

const app = express();

app.set('port', parseInt(PORT) || 4000);

app.use(helmet());
app.use(compression());

app.use(session);
app.use(passport.initialize());
app.use(passport.session());

app.use(GRAPHQL_ENDPOINT, (request, response, next) => {
    return next();
});

apollo.applyMiddleware({ app, path: GRAPHQL_ENDPOINT });

app.post(
    '/auth/login',
    passport.authenticate(
        'local' /*,
        {failureRedirect: '/login'},
        function (error, person) {
            console.log({error});
            console.log({person});
        }*/
    ),
    function (request, response) {
        response.send('success');
        // response.redirect('/');
    }
);

app.get('/', function (request: any, response: any) {
    response.json({
        session: request.session,
        user: request.user
    });
});

export default app;
