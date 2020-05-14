//7 задание
let text = prompt('Введите текст');
text = text.split(' ').filter(n => n).join(' ');

console.log(text);
// let a = text.replace(/\s+/g,' ');