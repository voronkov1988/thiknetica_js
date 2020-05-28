const td = document.querySelectorAll('td');
const resultRavno = document.querySelector('td.result');
let calculatedString = '';
const resCalc = document.querySelector('.result');
const resSpan = document.querySelector('.result span');

document.addEventListener('keydown', (event) => {
	if(event.key.match(/\//)) event.preventDefault;
    if ((event.key).match(/[0-9%\/*\-+=]|Backspace|Enter/)){
        //получаю полную строку выражения
        calculatedString += event.key;
        resSpan.textContent = calculatedString;
        if (event.key === 'Enter') {
            resCalc.textContent = getResult(calculatedString.substring(4,-1));
            calculatedString = +getResult(calculatedString.substring(4,-1));
        }
        if (event.key === 'Backspace') {
            calculatedString = '';
            resCalc.textContent = 0;
        }
    }
    	
})

td.forEach(item => {
    item.addEventListener('click', () => {
        //получаю полную строку выражения
        calculatedString += item.textContent;
        resSpan.textContent = calculatedString;
        if (item.textContent === '=') {
            resCalc.textContent = getResult(calculatedString);
            calculatedString = +getResult(calculatedString);
        }
        if (item.textContent === 'C') {
            calculatedString = '';
            resCalc.textContent = 0;
        }
    });
})


function getResult(calculatedString) {
    let res = 0;
    //в конце строки вырезаю =
    let resultString = calculatedString.substring(0, calculatedString.length - 1)
    //определяю какой знак у выражения
    let znak;
    if (resultString.includes('+')) znak = `+`;
    if (resultString.includes('-')) znak = `-`;
    if (resultString.includes('/')) znak = '/';
    if (resultString.includes('*')) znak = `*`;
    //создаю массив исходя какой знак
    let calcString = resultString.split(znak);
    switch (znak) {
        case '+':
            res = +calcString[0] + +calcString[1];
            break;
        case '-':
            res = +calcString[0] - +calcString[1];
            break;
        case '/':
        	res = +calcString[0] / +calcString[1];
        	break;
        case '*':
        	res = +calcString[0] * +calcString[1];
    }
    
    return res
}