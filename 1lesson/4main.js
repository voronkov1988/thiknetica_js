//4 задание
let allNum = [];
let predRes = 0;
let result = 0;

function res() {
    let num = prompt('Введите число');

    if (num !== '') {
        allNum.push(num);
        predRes += +num;
        result = predRes / allNum.length;
        console.log(result);
        res();
    }else{
    	alert(`Сумма ${predRes} количество чисел ${allNum.length} среднее арифметическое ${result}`)
    }
}
res();