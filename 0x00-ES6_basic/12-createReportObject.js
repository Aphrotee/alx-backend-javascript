export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      let i = 0;
      for (const employeee in employeesList) { i += 1; }
      return i;
    },
  };
  return reportObject;
}
