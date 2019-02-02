const express = require('express');
const router = express.Router();

const request = require('superagent');
const async = require('async');


router.get('/test', (req, res) => {
  res.status(200).json({ test: 'This is from the server' })
})

module.exports = router;