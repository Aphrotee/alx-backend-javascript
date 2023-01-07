interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Temitope',
    lastName: 'Aiyebogan',
    age: 19,
    location: 'Bariga',
}

const student2: Student = {
    firstName: 'Ayomide',
    lastName: 'Ogunnoiki',
    age: 19,
    location: 'Ikeja',
}

let studentArray: Student[] = [student1, student2];

    let table = document.createElement('table');
    document.body.appendChild(table); // Drew the main table node on the document
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);

    for (var i = 0; i<2; i++) { 
        var tr = document.createElement('tr'); //Create 3 <tr> elements assigned to a unique variable BUT need a working alternative for 'tr[i]'
        table.appendChild(tr); // Append to <table> node

        for (let prop in studentArray]) {
            var tdElement = document.createElement('td');
            tdElement.innerHTML = ;
            tr.appendChild(tdElement); // Take string from placeholder variable and append it to <tr> node
        }
    }