const express = require('express');
const router = express.Router();

router.get('/admin', (req, res) => {
  res.send('Admin Dashboard');
});

module.exports = router;
