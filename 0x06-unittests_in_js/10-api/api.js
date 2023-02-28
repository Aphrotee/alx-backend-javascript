const express = require('express');

const host = '127.0.0.1';
const port = 7865;

const app = express();

app.use(express.json());

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

app.get('/available_payments', (req, res) => {
  const methods = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.send(methods);
});

app.post('/login', (req, res) => {
  if (req.body) {
    const username = req.body.userName;
    res.send(`Welcome ${username}`);
  } else {
    res.status(400);
    res.send();
  }
});

app.listen(port, host, () => console.log(`API available on localhost port ${port}`));

module.exports = app;
