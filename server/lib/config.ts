import dotenv from 'dotenv';

dotenv.config();

export const { PORT = Number(process.env.BACKEND_PORT) || 3000 } = process.env;
