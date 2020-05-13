//3 задание
let date = prompt('Введие дату');
let mas = date.split('.');

let mm = mas[0];
let dd = mas[1];
let gg = mas[2];
if(mm < 10)
	mm = '0' + mm;
if(dd < 10)
	dd = '0' + dd;
let newDate = dd + '.' + mm + '.' + gg;
console.log(date);
console.log(newDate);