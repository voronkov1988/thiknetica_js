describe('sumOfPositive', () => {
    it('correct', () => {
        const result = sumOfPositive([1,2,3]);
        assert.deepEqual(result, {count: 3, sum: 6});
    });
    it('correct', () => {
        const result = sumOfPositive([0,0,0]);
        assert.deepEqual(result, {count: 0, sum: 0});
    });
    it('NaN', () => {
        const result = sumOfPositive([NaN,NaN,NaN]);
        assert.deepEqual(result, {count: 0, sum: 0});
    });
    it('-num', () => {
        const result = sumOfPositive([-1,-2,-3]);
        assert.deepEqual(result, {count: 0, sum: 0});
    });
    it(' 0 and -num', () => {
        const result = sumOfPositive([-1,-2,-3]);
        assert.deepEqual(result, {count: 0, sum: 0});
    });
    it('string array', () => {
        const result = sumOfPositive(['s','s']);
        assert.deepEqual(result, {count: 0, sum: 0});
    });

});

describe('wordStat', ()=>{
    it('emty string', () => {
        const result = wordStat('');
        assert.deepEqual(result, [{ word: '', sum: 0 }]);
    });
    it('передаю строку 0', () => {
        const result = wordStat('0');
        assert.deepEqual(result, [ { word: '0', sum: 48 } ]);
    });
    it('-1 string', () => {
        const result = wordStat('-1');
        assert.deepEqual(result, [ { word: '-1', sum: 94 } ]);
    });
    it('correct word', () => {
        const result = wordStat('ipsum');
        assert.deepEqual(result, [{word: "ipsum", sum: 558}]);
    });
    it('correct word', () => {
        const result = wordStat('Lorem');
        assert.deepEqual(result, [{word: "Lorem", sum: 511}]);
    });
    it('undefined', () => {
        const result = wordStat(undefined);
        assert.deepEqual(result, 'error');
    });
    it('null', () => {
        const result = wordStat(null);
        assert.deepEqual(result, 'error');
    });
    it('Number', () => {
        const result = wordStat(2);
        assert.equal(result, 'error');
    });
})

describe('getSumCode', ()=>{
    it('numer', () => {
        const result = getSumCode(0);
        assert.equal(result, 'error');
    });
    it('', () => {
        const result = getSumCode('');
        assert.equal(result, 0);
    });
    it('correct', () => {
        const result = getSumCode('dolor');
        assert.equal(result, 544);
    });
    it('correct', () => {
        const result = getSumCode('sit');
        assert.equal(result, 336);
    });
})