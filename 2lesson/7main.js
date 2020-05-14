//7 задание
let text = prompt('Введите текст');
let count = 0;
let res = '';

for(let i = 0; i < text.length; i++){
	if(text[i] === ' '){
		count++;
		if(count > 1){
			text[count] = ' '
		}
	}else{
		res += text[i] + ' ';
	}
	
}
console.log(res);




// let a = text.replace(/\s+/g,' ');