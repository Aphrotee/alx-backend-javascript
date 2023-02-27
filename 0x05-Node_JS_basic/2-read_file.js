const fs = require('fs');

function countStudents(fileName) {
  const filename = `./${fileName}`;
  if (fs.existsSync(filename)) {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        process.stderr._write(err);
        return;
      }
      let studentData = data.split('\n');
      studentData = studentData.map((value) => value.split(','));
      studentData = studentData.filter((value) => value[0].length !== 0);
      const numOfStudents = studentData.length - 1;
      console.log(`Number of students: ${numOfStudents}`);
      const fields = [];
      for (let i = 1; i < studentData.length; i += 1) {
        const field = studentData[i][3];
        if (!fields.includes(field)) {
          fields.push(field);
          const students = studentData.filter((value) => value[3] === field);
          let listOfStudents = students.map(((value) => value[0]));
          listOfStudents = listOfStudents.join(', ');
          const message = `Number of students in ${field}: ${students.length}.`
            + ` List: ${listOfStudents}`;
          console.log(message);
        }
      }
    });

  } else {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
