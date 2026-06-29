import express from 'express';
const router = express.Router();

router.get('/test', (req, res) => {
  res.json({ message: 'Faculty routes working!' });
});

router.get('/profile', (req, res) => {
  res.json({ message: 'Faculty profile endpoint' });
});

router.put('/profile', (req, res) => {
  res.json({ message: 'Update faculty profile endpoint' });
});

export default router;