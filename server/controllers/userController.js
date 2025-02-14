const express = require('express');
const router = express.Router();

router.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  res.json(user);
});

module.exports = router;
