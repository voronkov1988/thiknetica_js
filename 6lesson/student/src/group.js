'use strict';
function Group(number) {
    validateValues();

    this.number = number;
    this.students = [];

    this.addStudent = (student) => {
        this.students.push(student);
    }

    this.whoSick = function() {
        const arraySick = [];
        this.students.forEach(student => {
            if (!student.healthy())
                arraySick.push(student.fullname());
        });
        return arraySick;
    }

    function validateValues() {
        if (typeof number !== "number")
            throw new Error('Значение должно быть числом');
        if (!number)
            throw new Error('Вам нужно ввести номер группы');
    }
}