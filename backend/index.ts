import { HOST, GRAPHQL_ENDPOINT } from './services/secrets';
import db from './services/database';
import app from './services/server';

(async () => {
    try {
        await db;
        app.listen(app.get('port'), () => {
            console.log(
                'Root:\t\t\t' +
                    (HOST || 'http://localhost') +
                    ':%d\n' +
                    'GraphQL endpoint:\t' +
                    (HOST || 'http://localhost') +
                    ':%d' +
                    GRAPHQL_ENDPOINT,
                app.get('port'),
                app.get('port')
            );
        });
    } catch (error) {
        console.error(error);
    }
})();
