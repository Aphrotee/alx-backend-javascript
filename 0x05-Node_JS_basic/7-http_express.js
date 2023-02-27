const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const host = '127.0.0.1';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
})

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
  .then((msg) => res.send(msg))
  .catch((err) => res.send(String(err)));
});


app.listen(port, host);