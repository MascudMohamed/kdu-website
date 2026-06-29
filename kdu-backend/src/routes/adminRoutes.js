import express from 'express';
const router = express.Router();

router.get('/test', (req, res) => {
  res.json({ message: 'Admin routes working!' });
});

router.get('/users', (req, res) => {
  res.json({ message: 'Get users endpoint' });
});

router.get('/stats', (req, res) => {
  res.json({ message: 'Get stats endpoint' });
});

export default router;