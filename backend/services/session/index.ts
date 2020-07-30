import { SESSION_SECRET } from '../secrets';

import connectRedis from 'connect-redis';
import redis from 'redis';
import session from 'express-session';

const RedisStore = connectRedis(session);
const redisClient = redis.createClient();

export default session({
    name: 'sessionId',
    store: new RedisStore({ client: redisClient }),
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 12 // 12 hours
    }
});
