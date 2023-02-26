const express = require('express');

const host = '127.0.0.1';
const port = 7865;

const app = express();

app.get('/', (req, res) => {
  res.status(200);
  res.send('Welcome to the payment system');
});

app.param('id', (req, res, next, id) => {
  req.id = id;
  next();
});

app.get('/cart/:id', (req, res) => {
  const { id } = req;
  if (/^\d+$/.test(id)) {
    res.status(200);
    res.send(`Payment methods for cart ${id}`);
  } else {
    res.status(404);
    res.send();
  }
});

app.listen(port, host, () => console.log(`API available on localhost port ${port}`));

module.exports = app;
