/*2. Реализовать форму покупки билетов на самолет.

    Форма должна собирать необходимую информацию и вызывать функцию buyTicket.
    В случае ошибки показать текст ошибки
    В случае успеха показать купленное место
    Также после успешной покупки билета требуется очистить поля формы,
    чтобы было удобно покупать новый билет */

const submit = document.querySelector('.submit');
submit.addEventListener('click', getTicket);
function getTicket(e){
	e.preventDefault();
	let flName = document.querySelector('input.flightName').value,
		bTime = document.querySelector('input.buyTime'),
		fName = document.querySelector('input.fullName').value,
		inputs = document.querySelectorAll('input');
		let days = bTime.value.split('-')[1];
		let month = bTime.value.split('-')[2];
		let func = buyTicket(flName, makeTime(days,month), fName)
		
		alert(`Вы успешно купили билет, ваше место ${func.seat}`)
		inputs.forEach(item => item.value = '');
}