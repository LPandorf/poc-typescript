import express, { json } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';

import booksRoutes from './routes/booksRoutes.js';

dotenv.config();

const app = express();
app.use(json());
app.use(cors());
app.use(helmet());
app.use(booksRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});