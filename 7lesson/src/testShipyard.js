describe('class Shipiards', () => {
    describe('create MotorDock', () => {
        it('пустое имя', () => {
            expect(() => new MotorDock()).to.throw('Вам нужно ввести имя дока');
        });
        it('нет координат', () => {
            expect(() => new MotorDock('Dock 01')).to.throw('Вам нужно ввести положение дока');
        });
        it('имя строка', () => {
            expect(() => new MotorDock(123, {x: 0, y: 0})).to.throw('Имя значения не является строкой');
        });
        it('х не число', () => {
            expect(() => new MotorDock('name', {x: "123", y: 0})).to.throw('Координата положения x не является числом');
        });
        it('у не число', () => {
            expect(() => new MotorDock('name', {x: 0, y: "123"})).to.throw('Координата положения y не является числом');
        });
    });

    describe('create SailingDock', () => {
        it('имя дока', () => {
            expect(() => new SailingDock()).to.throw('Вам нужно ввести имя дока');
        });
        it('позиция корабля', () => {
            expect(() => new SailingDock('Dock 01')).to.throw('Вам нужно ввести положение дока');
        });
        it('имя строкой', () => {
            expect(() => new SailingDock(123, {x: 0, y: 0})).to.throw('Имя значения не является строкой');
        });
        it('позиция х не число', () => {
            expect(() => new SailingDock('name', {x: "123", y: 0})).to.throw('Координата положения x не является числом');
        });
        it('позиция у не число', () => {
            expect(() => new SailingDock('name', {x: 0, y: "123"})).to.throw('Координата положения y не является числом');
        });
    });

    describe('operations', () => {
        const dock55 = new MotorDock('Dock 55', {x: 55, y: 55})
        const ship55 = new MotorShip('Ship 55', 'model1', {x: 55, y: 55});
        const ship22 = new MotorShip('Ship 22', 'model1', {x: 22, y: 22});
        const testSailingShip = new SailingShip('SailingShip', 'model2', {x: 55, y: 55});

        describe('создание', () => {
            it('некоректная стройка корабля', () => {
                expect(() => dock55.buildShip('Test Ship', 'Test model', 'sailing')).to.throw('Этот док может построить корабль только указанного вида');
            });

            it('создание моторного', () => {
                const dock66 = new MotorDock('Dock 66', {x: 66, y: 66})
                const ship66 = dock66.buildShip('Ship 66', 'model 66', 'motor');
                assert.equal(ship66 instanceof MotorShip, true);
            });

            it('создание парусного', () => {
                const dock77 = new SailingDock('Dock 77', {x: 77, y: 77})
                const ship77 = dock77.buildShip('Ship 77', 'model 77', 'sailing');
                assert.equal(ship77 instanceof SailingShip, true);
            });
        });

        describe('чинить', () => {
            it('чинить корабль', () => {
                expect(() => dock55.repairShip(testSailingShip)).to.throw('Этот док может ремонтировать корабль только указанного вида');
            });
            it('чинить корабль', () => {
                expect(() => dock55.repairShip(ship22)).to.throw('Этот док может ремонтировать корабль только указанного вида');
            });
        });

        describe('покраска', () => {
          it('пустой цвет', () => {
              expect(() => dock55.paintShip(ship55)).to.throw('выбрать цвет');
          });
        });
    });
});