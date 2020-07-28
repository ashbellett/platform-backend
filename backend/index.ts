import { HOST } from './services/secrets';
import db from './services/mongoose';
import app from './services/express';

(async () => {
    try {
        await db;
        app.listen(app.get('port'), () => {
            console.log((HOST || 'http://localhost') + ':%d' + '/graphql', app.get('port'));
        });
    } catch (error) {
        console.error(error);
    }
})();
