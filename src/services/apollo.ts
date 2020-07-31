import { NODE_ENV } from '../secrets';
import typeDefs from '../typeDefs';
import resolvers from '../resolvers';

import { ApolloServer } from 'apollo-server-express';

export default new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }),
    playground: NODE_ENV === 'development'
});
