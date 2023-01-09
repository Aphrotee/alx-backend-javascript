export interface Student {
    firstName:string;
    lastName:string;
    age:number;
    location:string;
}


const student1: Student = {
  firstName: 'Temitope',
  lastName: 'Áiyebogan',
  age: 19,
  location: 'Ilaje',
}

const student2: Student = {
  firstName: 'Ayomide',
  lastName: 'Ogunnoiki',
  age: 19,
  location: 'Ikeja',
}

const empty: Student = {
  firstName: '',
  lastName: '',
  age: 0,
  location: '',
}

const head: Student = {
  firstName: 'firstName',
  lastName: 'lastName',
  age: 0,
  location: 'location',
}
const studentArray: Student[] = [student1, student2, empty];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const trH = document.createElement('tr');

const h1 = document.createElement('th');
const h2 = document.createElement('th');

h1.innerHTML = 'firstName';
h2.innerHTML = 'location';

trH.appendChild(h1);
trH.appendChild(h2);

for (let studentInt of studentArray) {
  let trB = document.createElement('tr');
  let c1 = document.createElement('td');
  let c2 = document.createElement('td');
  c1.innerHTML = studentInt.firstName;
  c2.innerHTML = studentInt.location;
  trB.appendChild(c1);
  trB.appendChild(c2);
  tbody.appendChild(trB);
}

document.appendChild(table);