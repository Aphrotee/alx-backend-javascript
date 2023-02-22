const express = require('express');
const StudentsController = require('./StudentsController');
const countStudents = require('./StudentsController');

const app = express();
const port = 1245;
const host = '127.0.0.1';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
})

app.get('/students', (req, res) => {
  StudentsController.getAllStudents(req, res);
});

app.listen(port, host);