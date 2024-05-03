interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}
const student1: Student = {
  firstName: 'Zeberga',
  lastName: 'Timothy',
  age: 30,
  location: 'Addis',
};
const student2: Student = {
  firstName: 'Guilliame',
  lastName: 'Salva',
  age: 29,
  location: 'San Francisco',
};
const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.appendChild(tbody);


studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const firstName = document.createElement('td');
  const location = document.createElement('td');

  firstName.textContent = student.firstName;
  location.textContent = student.location;
  firstName.style.border = '2px solid black';
  location.style.border = '2px solid black';
  row.appendChild(firstName);
  row.appendChild(location);
  tbody.appendChild(row);
});

document.body.appendChild(table);
