var express = require('express');
var router = express.Router();
var breaker = require('../breaker');

// GET
router.get('/index', function(req, res, next) {
    res.json({
      "/setup": 'setup game',
      "/play/number": 'play'
    });
});

// GET
router.get('/play/:number', function(req, res, next) {
  n = [];
  numbers = req.params.number;

  for (var i = 0, len = numbers.length; i < len; i += 1) {
    n.push(+numbers.charAt(i));
  }

  result = breaker.evaluate(n[0], n[1], n[2], n[3]);
  res.json({
    result
  });
});

// POST
router.post('/setup', function (req, res, next) {
  console.log("POST");
  let data = req.body;
  console.log(data);
  breaker.set(data.a, data.b, data.c, data.d);
  res.json({
    response: '200 OK'
  });
});

module.exports = router;
