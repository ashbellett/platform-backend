import { NODE_ENV } from '../secrets';

import { ApolloServer } from 'apollo-server-express';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

export default new ApolloServer({
    typeDefs,
    resolvers,
    playground: NODE_ENV === 'development'
});