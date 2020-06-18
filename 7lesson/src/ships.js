'use strict'

function Ship(name, model) {


    let _isAnchorDroped = false;
    this.name = name;
    this.model = model;
    this.distance = 0;
    // this.position = {x: position.x, y: position.y};
    this.speed = 0;


    this.move = function(koord) {
        if (_isAnchorDroped)
            throw new Error('You need to rise anchor');

        koord = koord.toLowerCase();

        switch (koord) {
            case 'n':
                this.position.y += 1;
                this.distance += 1;
                return true;

            case 'w':
                this.position.x -= 1;
                this.distance += 1;
                return true;

            case 's':
                this.position.y -= 1;
                this.distance += 1;
                return true;

            case 'e':
                this.position.x += 1;
                this.distance += 1;
                return true;

            default:
                throw new Error('Ошибка');
        };
    };

    this.moveTo = function(position) {
        if (_isAnchorDroped)
            throw new Error('Необходимо поднять якорь');

        const positionBefore = { ...this.position };
        const distance = Math.abs(positionBefore.x - position.x) + Math.abs(positionBefore.y - position.y)

        this.position = {
            x: position.x,
            y: position.y,
        }

        this.distance += distance;
        return true;
    };


    this.isAnchorDroped = function() {
        return _isAnchorDroped;
    };


    this.dropAnchor = () => {
        if (this.speed !== 0)
            throw new Error('Скорость должна быть 0');

        _isAnchorDroped = true;

        return _isAnchorDroped;
    };

    this.riseAnchor = () => {
        _isAnchorDroped = false;

        return !_isAnchorDroped;
    };
}

const MotorShip = function(name, model, koord) {
    validateValues(name, model, koord);
    this.type = 'motor';
    this.power = 15;
    this.korpus = 'metall';
    this.name = name;
    this.model = model;
    this.koord = { x: koord.x, y: koord.y }
}

const SailingShip = function(name, model, koord) {
    validateValues(name, model, koord);
    this.type = 'sailing';
    this.power = 2;
    this.korpus = 'metall';
    this.name = name;
    this.model = model;
    this.koord = { x: koord.x, y: koord.y }
}

function validateValues(name, model, position) {
    if (!name)
        throw new Error('Нужно ввести имя корабля');
    if (!model)
        throw new Error('Необходима модель корабля');
    if (!position)
        throw new Error('Введите местоположение');

    if (typeof name !== "string")
        throw new Error('Неверный формат');
    if (typeof model !== "string")
        throw new Error('Неправильно введена модель');

    if (typeof position.x !== 'number')
        throw new Error('Координаты х не могут быть стркоой');
    if (typeof position.y !== 'number')
        throw new Error('Координаты у не могут быть строкой');
}

MotorShip.prototype = new Ship();
SailingShip.prototype = new Ship();