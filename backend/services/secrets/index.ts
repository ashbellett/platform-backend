// Environment variables
import dotenv from 'dotenv';

dotenv.config();

export const { HOST, PORT, MONGODB_URI, SESSION_SECRET, GRAPHQL_ENDPOINT, NODE_ENV } = process.env;
