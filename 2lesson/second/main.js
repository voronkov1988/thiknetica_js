//1 доп задание
// for(let i = 1; i < 11; i++){
// 	for(j = 1; j < 11; j++){
// 		console.log(i + '*' + j + '=' + i*j);
// 	}
// }

//2 доп задание
// let text = prompt('Введите время');
// let dd = 0;
// let mm = 0;
// let time = '';

// function correct(a) {
//     if (text.indexOf(a) !== -1) {
//         text = text.split(a);
//         dd = text[0];
//         mm = text[1].substr(0, 2);
//         time = text[1].substr(3, 2);
//     }
//     if (text.indexOf(': ') !== -1) {
//         text = text.split(': ');
//         dd = text[0];
//         mm = text[1].substr(0, 2);
//         time = text[1].substr(3, 2);
//         if (mm < 10) {
//             time = text[1].substr(2, 2);
//             // console.log('b');
//         }
//     }
//     if (mm < 10) {
//         time = text[1].substr(2, 2);
//     }
// }
// correct('.');
// correct('-');
// correct(':');
// correct(': ')

// if (time.indexOf('am') !== -1) {
//     if (dd === '12') {
//         dd = '00';
//     } else if (dd === '10' || dd === '11') {
//         dd = dd;
//     } else if (dd < 10) {
//         dd = '0' + dd;
//     } else if (dd > '12') {
//         alert('error')
//     }
//     if (mm < 10) {
//         mm = '0' + mm;
//     } else if (mm > 59) {
//         alert('error');
//     }
// }

// if (time.indexOf('pm') !== -1) {
//     dd = +dd + 12;
// }
// console.log(`${dd}:${mm}`);

//3 задание
