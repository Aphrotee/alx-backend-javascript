const fs = require('fs');

function readDatabase(filePath) {
  const filepath = `./${filePath}`;
  const P = new Promise((resolve, reject) => {
    if (fs.existsSync(filepath)) {
      fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          let studentData = data.split('\n');
          studentData = studentData.map((value) => value.split(','));
          studentData = studentData.filter((value) => value[0].length !== 0);
          const message = {};
          const fields = [];
          for (let i = 1; i < studentData.length; i += 1) {
            const field = studentData[i][3];
            if (!fields.includes(field)) {
              fields.push(field);
              const students = studentData.filter((value) => value[3] === field);
              const listOfStudents = students.map(((value) => value[0]));
              message[field] = listOfStudents;
            }
          }
          resolve(message);
        }
      });

    } else {
      reject(new Error('Cannot load the database'));
    }
  });

  return P;
}

module.exports = readDatabase;
