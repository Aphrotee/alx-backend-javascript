const express = require('express');
const routes = require('./routes/index');

const app = express();
const port = 1245;
const host = '127.0.0.1';
routes(app);

app.listen(port, host);

module.exports = app;
