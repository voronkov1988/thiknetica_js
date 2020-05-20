//2 основное задание
const text = 'Lorem ipsum dolor sit amet.';

let object = text.split(' ').map(item => {
    return {
        'word': item,
        'sum': item.split('').reduce((total,num)=>total + num.charCodeAt(),0)
    }
})
console.log(object);

// let newMas = [];

// function getMassiv(arg) {
//     newMas = text.split(' ');
//     for (let i = 0; i < newMas.length; i++) {
//         newMas[i] = {
//             word: newMas[i],
//             sum: getSum(newMas[i])
//         };
//     }

//     function getSum(arg) {
//         let sumReady = 0;
//         for (let a = 0; a < arg.length; a++) {
//             sumReady += arg[a].charCodeAt();
//         }
//         return sumReady;
//     }

// }

// getMassiv(newMas);
// console.log(newMas);