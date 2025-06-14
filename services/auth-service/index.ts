import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const prisma = new PrismaClient();

app.get('/health', (_, res) => res.send('Auth service running'));

async function startServer() {
  try {
    await prisma.$connect();
    app.listen(4001, () => {
      console.log('Auth service on http://localhost:4001');
    });
  } catch (err) {
    console.error('PostgreSQL connection error:', err);
  }
}

startServer();
