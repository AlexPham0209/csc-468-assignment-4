const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('/' + req.method);
  next();
});

router.get('/', (req, res) => {
  res.sendFile('./views/index.html');
});

module.exports = router;