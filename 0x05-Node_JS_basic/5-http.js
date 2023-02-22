const http = require('http');
const countStudents = require('./3-read_file_async');

const host = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  switch (req.url) {
    case '/students':
      res.statusCode = 200;
      countStudents(process.argv[2])
        .then((msg) => res.end(msg))
        .catch((err) => res.end(String(err)));
      break;
    case '/':
      res.statusCode = 200;
      res.end('Hello Holberton School!');
      break;
    default:
      res.statusCode = 404;
  }
});

app.listen(port, host);
