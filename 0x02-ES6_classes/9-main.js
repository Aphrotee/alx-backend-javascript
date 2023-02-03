import listOfStudents from "./9-hoisting";
import listOfStudents, { StudentHolberton, HolbertonClass } from "./9-hoisting.js";

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted)
console.log(listOfStudents[0] instanceof StudentHolberton, listPrinted[0] instanceof HolbertonClass)