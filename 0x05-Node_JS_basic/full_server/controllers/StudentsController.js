const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((students) => {
        let message = 'This is the list of our students';
        const keys = Object.keys(students);
        keys.sort();
        for (const key of keys) {
          message += `\nNumber of students in ${key}: ${students[key].length}. `;
          message += `List: ${students[key].join(', ')}`;
        }
        response.status(200);
        response.send(message);
      })
      .catch((error) => {
        response.status(500);
        response.send(String(error));
      });

  }

  static getAllStudentsByMajor(request, response) {
    readDatabase(process.argv[2])
      .then((students) => {
        const { major } = request;
        const majors = ['CS', 'SWE'];
        if (!majors.includes(major)) {
          response.status(500);
          throw new Error('Major parameter must be CS or SWE');
        }
        const message = `List: ${students[major].join(', ')}`;
        response.status(200);
        response.send(message);
      })
      .catch((error) => {
        response.status(500);
        response.send(String(error));
      });

  }
}

module.exports = StudentsController;
