var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('/create works! blabla');
})
module.exports = router;