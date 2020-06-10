'use strict';

function Dock(name, position) {
    validateValues();

    this.name = name;
    this.position = { x: position.x, y: position.y };
    this.ships = {};

    this.moor = function (ship) {
        if (this.position.x != ship.position.x || this.position.y != ship.position.y)
            throw new Error('Ship position != position dock');

        if (this.ships[ship.name])
            throw new Error('Dock already moor this ship');

        this.ships[ship.name] = ship;
        return true;
    };

    this.unmoor = function (ship) {
        if (!this.ships[ship.name])
            throw new Error('Dock has not this ship');

        delete this.ships[ship.name];
        return true;
    };

    function validateValues() {
        if (!name)
            throw new Error('You need enter name of dock');
        if (!position)
            throw new Error('You need enter position of dock');

        if (typeof name !== "string")
            throw new Error('Value name is not string');

        if (typeof position.x !== 'number')
            throw new Error('Position coordinate X is not number');
        if (typeof position.y !== 'number')
            throw new Error('Position coordinate Y is not number');
    }
}

