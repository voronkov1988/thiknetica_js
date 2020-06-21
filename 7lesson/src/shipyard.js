'use strict';


function Dock(name, koord) {

    this.buildShip = function(name, model, type) {
        if (this.model !== type)
            throw new Error('Этот док может построить корабль только указанного вида');

        if (type === "motor")
            return new MotorShip(name, model, this.koord)
        if (type === "sailing")
            return new SailingShip(name, model, this.koord)
    };

    this.changeShip = function(ship, newName) {
    	if (ship.model === "motor")
            return new MotorShip('New Ship', ship.model, this.koord)
        if (this.model !== ship.model)
            throw new Error('Этот док может изменить только указанный вид корабля');
        if (ship.model === "sailing")
            return new SailingShip('New Ship', ship.model, this.koord)
    };

    this.repairShip = function(ship) {
        if (this.model !== ship.model)
            throw new Error('Этот док может ремонтировать корабль только указанного вида');
        if (ship.isNeedRepair === false)
            throw new Error('Ship is not need repair');

        ship.isNeedRepair = false;
        return !ship.isNeedRepair;
    };

    this.paintShip = function(ship, color) {
        if (!color)
            throw new Error('Value color is empty');

        ship.color = color;
        console.log(`корабль перекрашен в ${ship.color}`);
    };
}

const MotorDock = function(name, koord) {
    validateDockValues(name, koord);
    this.name = name;
    this.model = "motor";
    this.koord = { x: koord.x, y: koord.y };
}

MotorDock.prototype = new Dock();

const SailingDock = function(name, koord) {
    validateDockValues(name, koord);
    this.name = name;
    this.model = "sailing";
    this.koord = { x: koord.x, y: koord.y };
}

SailingDock.prototype = new Dock();

function validateDockValues(name, koord) {
    if (!name)
        throw new Error('Вам нужно ввести имя дока');
    if (!koord)
        throw new Error('Вам нужно ввести положение дока');

    if (typeof name !== "string")
        throw new Error('Имя значения не является строкой');

    if (typeof koord.x !== 'number')
        throw new Error('Координата положения x не является числом');
    if (typeof koord.y !== 'number')
        throw new Error('Координата положения y не является числом');
}