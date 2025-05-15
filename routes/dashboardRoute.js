import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('dashboard'); // This renders views/dashboard.ejs
});

export default router;

