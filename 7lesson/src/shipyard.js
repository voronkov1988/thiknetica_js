'use strict'
const MotorShipyard = function(power, material) {
    this.power = power;
    this.material = material;
    if (!power)
        throw new Error('не тот корабль')
    if (!material)
        throw new Error('Не введен материал корабля')
    MotorShipyard.prototype.repair = function() {
        console.log('repaired');
    }
    const createShip = function(power, material) {
        this.ship = ship;
        let ships = [];
        ships.push(ship);
    }
}

