const array = [-91, -93, -45, 67, 96, 40, -34, 96, -42, 58];

function sumOfPositive(args) {
    let nums = args.filter(num => num > 0);
    let sum = nums.reduce((summ, item) => summ + item, 0)
    return {
        count: nums.length,
        sum: sum
    }
}
// console.log(sumOfPositive(array));


const text = 'Lorem ipsum dolor sit amet.';

function wordStat(string) {
    let object;
    let array = string.split(' ');
    object = array.map(slovo => {
        return {
            word: slovo,
            sum: getSumCode(slovo)
        }
    })
    console.log(object);
    return object
}
wordStat(text);

function getSumCode(word) {
	// console.log(word.split('').reduce((sum, string) => sum + string.charCodeAt(), 0));
    return word.split('').reduce((sum, string) => sum + string.charCodeAt(), 0);
}