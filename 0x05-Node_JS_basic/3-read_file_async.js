const { rejects } = require('assert');
const fs = require('fs');

function countStudents(fileName) {
  const filename = `./${fileName}`;
  const P = new Promise((resolve, reject) => {
    if (fs.existsSync(filename)) {
      fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
          rejects(err);
        } else {
          let studentData = data.split('\n');
          studentData = studentData.map((value) => value.split(','));
          studentData = studentData.filter((value) => value[0].length !== 0);
          const numOfStudents = studentData.length - 1;
          let message = `Number of students: ${numOfStudents}`;
          const fields = [];
          for (let i = 1; i < studentData.length; i += 1) {
            const field = studentData[i][3];
            if (!fields.includes(field)) {
              fields.push(field);
              const students = studentData.filter((value) => value[3] === field);
              let listOfStudents = students.map(((value) => value[0]));
              listOfStudents = listOfStudents.join(', ');
              message += `\nNumber of students in ${field}: ${students.length}.`
                + ` List: ${listOfStudents}`;
            }
          }
          console.log(message);
          resolve(message);
        }
      });

    } else {
      reject(new Error('Cannot load the database'));
    }
  });

  return P;
}

module.exports = countStudents;
