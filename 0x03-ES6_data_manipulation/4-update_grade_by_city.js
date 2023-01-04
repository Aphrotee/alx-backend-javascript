export default function updateStudentGradeByCity(students, city, newGrades) {
  if (Array.isArray(students) && Array.isArray(newGrades)) {
    const cityStudents = students.filter((student) => student.location === city);
    return cityStudents.map((student) => {
      const newGrade = newGrades.find((g) => g.studentId === student.id);
      if (newGrade === undefined) {
        student.grade = 'N/A';
      } else {
        student.grade = newGrade.grade;
      }
      return student;
    });
  }
  return [];
}
