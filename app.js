var express = require('express');
var app = express();
var breaker = require('./breaker');

// GET
app.get('/index', function(req, res, next) {
    res.json({
      "/setup/number": 'set up game',
      "/play/number": 'play'
    });
});

// GET
app.get('/play/:number', function(req, res, next) {
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

// GET
app.get('/setup/:number', function (req, res, next) {
  n = [];
  numbers = req.params.number;
  for (var i = 0, len = numbers.length; i < len; i += 1) {
    n.push(+numbers.charAt(i));
  }
  breaker.set(n[0], n[1], n[2], n[3]);

  res.send("Game configured");
});

module.exports = app;
