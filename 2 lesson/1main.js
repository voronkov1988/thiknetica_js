// 1 основное задание

const mas = [91, 93, 45, -67, -96, -40, 34, -96, 42, -58];

let resMas = mas.filter(item => item < 0)
let sum = resMas.reduce((total, item) => total + item ,0);
console.log(resMas.length, sum);