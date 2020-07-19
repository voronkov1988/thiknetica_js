describe('class Ship', () => {
    describe('create MotorShip', () => {
        it('Должно быть имя у корабля', () => {
            expect(() => new MotorShip()).to.throw('Нужно ввести имя корабля');
        });
        it('Нужно ввести модель корабля', () => {
            expect(() => new MotorShip('Ship 01')).to.throw('Необходима модель корабля');
        });
        it('Пустые координаты корабля', () => {
            expect(() => new MotorShip('Ship 01', 'Model 01')).to.throw('Введите местоположение');
        });
        it('Имя не типа string', () => {
            expect(() => new MotorShip(123, 'model', {x: 0, y: 0})).to.throw('Неверный формат');
        });
        it('Некорректно указана модель', () => {
            expect(() => new MotorShip('name', 123, {x: 0, y: 0})).to.throw('Неправильно введена модель');
        });
        it('Координаты Х должны быть числом', () => {
            expect(() => new MotorShip('name', 'model', {x: "123", y: 0})).to.throw('Координаты х не могут быть стркой');
        });
        it('Координаты У должны быть числом', () => {
            expect(() => new MotorShip('name', 'model', {x: 0, y: "123"})).to.throw('Координаты у не могут быть строкой');
        });
    });

    describe('create SailingShip', () => {
        it('Empty name of ship', () => {
            expect(() => new SailingShip()).to.throw('Нужно ввести имя корабля');
        });
        it('Пустая модель корабля', () => {
            expect(() => new SailingShip('Ship 01')).to.throw('Необходима модель корабля');
        });
        it('пустые координаты корабля', () => {
            expect(() => new SailingShip('Ship 01', 'Model 01')).to.throw('Введите местоположение');
        });
        it('Неверный формат', () => {
            expect(() => new SailingShip(123, 'model', {x: 0, y: 0})).to.throw('Неверный формат');
        });
        it('Неверный формат модели', () => {
            expect(() => new SailingShip('name', 123, {x: 0, y: 0})).to.throw('Неправильно введена модель');
        });
        it('кординаты Х не число', () => {
            expect(() => new SailingShip('name', 'model', {x: "123", y: 0})).to.throw('Координаты х не могут быть стркой');
        });
        it('Координаты У не число', () => {
            expect(() => new SailingShip('name', 'model', {x: 0, y: "123"})).to.throw('Координаты у не могут быть строкой');
        });
    });

    describe('operations', () => {
        const ship = new MotorShip('name1', 'model1', {x: 0, y: 0});
        const ship2 = new MotorShip('name2', 'model1', {x: 0, y: 0});
        ship2.riseAnchor();

        it('неизвестное положение', () => {
            expect(() => ship2.move('ZZ')).to.throw('Ошибка');
        });

        it('скорость', () => {
            const ship = new MotorShip('name3', 'model2', {x: 0, y: 0});
            ship.speed = 10;
            assert.equal(ship.dropAnchor(), true);
        });

        it('Ship riseAnchor', () => {
            ship.riseAnchor();
            assert.equal(ship.isAnchorDroped(), false);
        });

        it('Ship dropAnchor', () => {
            ship.dropAnchor();
            assert.equal(ship.isAnchorDroped(), true);
        });
    });
});