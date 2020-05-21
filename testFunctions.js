describe('sumOfPositive', () => {
    it('correct', () => {
        const result = sumOfPositive([1,2,3]);
        assert.deepEqual(result, {count: 3, sum: 6});
    });
    it('correct', () => {
        const result = sumOfPositive([0,0,0]);
        assert.deepEqual(result, {count: 0, sum: 0});
    });
    it('incorrect', () => {
        const result = sumOfPositive([NaN,NaN,NaN]);
        assert.deepEqual(result, {count: 0, sum: 0});
    });
    it('-num', () => {
        const result = sumOfPositive([-1,-2,-3]);
        assert.deepEqual(result, {count: 0, sum: 0});
    });
    it('-num', () => {
        const result = sumOfPositive([-1,-2,-3]);
        assert.deepEqual(result, {count: 0, sum: 0});
    });
    it('string array', () => {
        const result = sumOfPositive(['s','s']);
        assert.deepEqual(result, {count: 0, sum: 0});
    });
});

describe('wordStat', ()=>{
    it('incorrect', () => {
        const result = wordStat('Lorem');
        assert.deepEqual(result, [{word: "Lorem", sum: 511}]);
    });
    it('incorrect', () => {
        const result = wordStat('ipsum');
        assert.deepEqual(result, [{word: "ipsum", sum: 558}]);
    });
    it('incorrect', () => {
        const result = wordStat('sit');
        assert.deepEqual(result, [{word: "sit", sum: 336}]);
    });
    it('incorrect', () => {
        const result = wordStat('ipsum');
        assert.deepEqual(result, [{word: "ipsum", sum: 558}]);
    });
})

describe('getSumCode', ()=>{
    it('incorrect', () => {
        const result = getSumCode('Lorem');
        assert.equal(result, 511);
    });
    it('incorrect', () => {
        const result = getSumCode('ipsum');
        assert.equal(result, 558);
    });
    it('incorrect', () => {
        const result = getSumCode('dolor');
        assert.equal(result, 544);
    });
    it('incorrect', () => {
        const result = getSumCode('sit');
        assert.equal(result, 336);
    });
})