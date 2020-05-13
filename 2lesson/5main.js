//5 задание
let glasnie = 'a,e,i,o,u,y';
let text = prompt('Введите текст');
let resGlas = 0;
let resSogl = 0;
for(let i = 0; i < text.length; i++){
	let sovp = glasnie.indexOf(text[i]);
	if(sovp != -1){
		resGlas += 1;
	}else{
		resSogl += 1
	}

}
	alert(`гласных - ${resGlas} | согласных - ${resSogl}`)

