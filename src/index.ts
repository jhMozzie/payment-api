import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

import customerRouter from '@/modules/customer/customer.route';
import collectorRouter from '@/modules/collector/collector.route';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/customers', customerRouter);
app.use('/api/collectors', collectorRouter);

// Root health check
app.get('/', (_req, res) => {
  res.send('API is running ✅');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});