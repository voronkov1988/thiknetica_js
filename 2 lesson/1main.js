// 1 основное задание

const mas = [91, 93, 45, -67, -96, -40, 34, -96, 42, -58];
let count = 0,
	sum = 0;

function getSum(...args){
	for(let oneMas of mas){
		if(oneMas < 0){
			count += 1;
			sum += oneMas;
		}
	}
}
getSum(mas);
console.log(count);
console.log(sum);
