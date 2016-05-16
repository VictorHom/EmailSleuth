'use strict';

const router = require('express').Router();
module.exports = router;

app.use('/emails', require('./emails'));

router.use(function(req, res){
  res.status(404).end();
})
