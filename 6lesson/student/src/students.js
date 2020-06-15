'use strict';

function Student(fio) {
    validateValues();
    fio = fio.replace(/\s+/g, ' ').trim()

    const arrFio = fio.split(" ");

    const arr = capitalizeElements(arrFio);

    let _health = true;
    this.firstname = arr[1];
    this.lastname = arr[0];
    this.middlename = arr[2];

    this.fullname = function () {
        const fullname = `${this.lastname} ${this.firstname} ${this.middlename}`;
        return fullname;
    }

    this.initials = function () {
        const initials = `${this.lastname} ${this.firstname} ${this.middlename[0]}.`;
        return initials;
    }

    this.healthy = function () {
        return _health;
    };

    this.makeSick = () => {
        _health = false;

        return !_health
    };

    this.makeHealthy = () => {
        _health = true;

        return _health
    };

    function validateValues() {
        if (!fio)
            throw new Error('Нужно ввести данные');

        if (typeof fio !== "string")
            throw new Error('Некоректные данные');
    }

    function capitalizeElements(array) {
        const newArray = [];
        array.forEach(element => {
            newArray.push(element.charAt(0).toUpperCase() + element.slice(1))
        });
        return newArray;
    }
}
