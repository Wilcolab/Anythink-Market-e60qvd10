const express = require('express');
const router = express.Router();

// GET /
router.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = router;
