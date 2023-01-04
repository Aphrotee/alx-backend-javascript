export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce((sum, current) => sum + current.id, 0);
  }
  return 0;
}
