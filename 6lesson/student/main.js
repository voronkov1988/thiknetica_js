'use strict';

const student = new Student(" cтуков     борис  евгеньевич");
const student2 = new Student("Иванов иван иваныч");
const group = new Group(123);

student2.makeSick();

console.log(student);
console.log(group);

group.addStudent(student);
group.addStudent(student2);
console.log(group);

console.log(group.whoSick())