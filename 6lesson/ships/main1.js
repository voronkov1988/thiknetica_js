'use strict';

const world = {
    docks: {},
    ships: {},
};

const dock01 = new Dock('Dock1', {x: 1, y: 1});

const ship01 = new Ship('Ship1', '1', {x: 1, y: 1});
const ship02 = new Ship('Ship2', '2', {x: 2, y: 2});

function addShip(world, ship) {
    if (world.ships[ship.name])
        throw new Error('Такой корабль уже есть');

    world.ships[ship.name] = ship;
}

console.log(ship02);
function addDock(world, dock) {
    if (world.docks[dock.name])
        throw new Error('Такой док уже есть');

    world.docks[dock.name] = ship;
}

