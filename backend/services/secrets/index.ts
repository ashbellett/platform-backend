// Environment variables
import dotenv from 'dotenv';

dotenv.config();

export const {
    HOST,
    PORT,
    MONGODB_URI,
    GRAPHQL_ENDPOINT,
    NODE_ENV
} = process.env;
/*
export {
    HOST,
    PORT,
    DATABASE,
    ENDPOINT,
    NODE_ENV
};
*/