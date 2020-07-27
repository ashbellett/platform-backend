// Environment variables
import dotenv from 'dotenv';

dotenv.config();

const { HOST, PORT, DATABASE } = process.env;

export { HOST, PORT, DATABASE };
