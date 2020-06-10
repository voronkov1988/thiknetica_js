'use strict';

const student = new Student("петров петр      петрович  ");
const student2 = new Student("Воронков Евгений Алексендрович");
const group = new Group(123);

student2.makeSick();

console.log(student);
console.log(group);

group.addStudent(student);
group.addStudent(student2);
console.log(group);

console.log(group.whoSick())