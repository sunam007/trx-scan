import { getServerIp } from "../utils/getServerIp";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const serverConfig = {
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    client_url: getServerIp() + ":" + process.env.PORT
};