// Environment variables
import dotenv from 'dotenv';

dotenv.config();

const { HOST, PORT, DATABASE, NODE_ENV } = process.env;

export { HOST, PORT, DATABASE, NODE_ENV };
