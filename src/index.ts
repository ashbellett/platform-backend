import { HOST, GRAPHQL_ENDPOINT } from './secrets';
import { db } from './services';
import { app } from './services';

(async () => {
    try {
        await db;
        app.listen(app.get('port'), () => {
            console.log(
                `
Root:             ${HOST || 'http://localhost'}:%d
GraphQL endpoint: ${HOST || 'http://localhost'}:%d${GRAPHQL_ENDPOINT}
`,
                app.get('port'),
                app.get('port')
            );
        });
    } catch (error) {
        console.error(error);
    }
})();
