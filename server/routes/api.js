import { time } from 'console';
import express from 'express';

const router = express.Router();

router.get('/ping', (req, res) => {
  res.json({ status: 'ok', time: new Date().now });
});

export default router;
