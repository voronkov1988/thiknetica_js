let td = document.querySelectorAll('td');
let resultRavno = document.querySelector('td.result');
let calculatedString = '';
let resCalc = document.querySelector('.result');



td.forEach(item => {
	item.addEventListener('click', ()=>{
		//получаю полную строку выражения
		calculatedString += item.textContent;
		console.log(item.textContent);
		if(item.textContent === '=') {
			resCalc.textContent = getResult(calculatedString);
		}
		if(item.textContent === 'C'){
			calculatedString = '';
			resCalc.textContent = 0;
		}
	});
})
function getResult(calculatedString){
	//в конце строки вырезаю =
	let resultString = calculatedString.substring(0, calculatedString.length - 1)
	//определяю какой знак у выражения
	let znak;
	if(resultString.includes('+')) znak = `\+`;
	if(resultString.includes('-')) znak = `\-`;
	if(resultString.includes('/')) znak = '\/';
	if(resultString.includes('*')) znak = `\*`;
	//создаю массив исходя какой знак
	let calcString = resultString.split(znak);

	let res = new Function('return ' + `${calcString[0]} ${znak} ${calcString[1]}`)();
	return res
	console.log(res);
}
