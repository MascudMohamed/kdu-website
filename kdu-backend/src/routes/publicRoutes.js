import express from 'express';
const router = express.Router();

router.get('/test', (req, res) => {
  res.json({ message: 'Public routes working!' });
});

router.get('/faculty', (req, res) => {
  res.json({ message: 'Get faculty list endpoint' });
});

router.get('/departments', (req, res) => {
  res.json({ message: 'Get departments endpoint' });
});

export default router;