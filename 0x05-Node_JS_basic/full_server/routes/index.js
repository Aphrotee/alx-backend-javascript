const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

function routes(app) {
  app.get('/', (req, res) => {
    AppController.getHomepage(req, res);
  });


  app.get('/students', (req, res) => {
    StudentsController.getAllStudents(req, res);
  });


  app.param('major', (req, res, next, major) => {
    req.major = major;
    next();
  });


  app.get('/students/:major', (req, res) => {
    StudentsController.getAllStudentsByMajor(req, res);
  });

}

module.exports = routes;
