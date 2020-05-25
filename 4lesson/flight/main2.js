//2. Реализовать функцию flightDetails(flightName) которая принимает
// объект рейса и будет выводить в контейнер <div id=”flight-details”></div> 
//отчет по рейсу и отображать список купленных билетов: номер билета, место, 
//полное имя пассажира, прошел ли регистрацию на рейс. 

let newTicket = {};

function flightDetails(flightName){
let ticket = flights[flightName].tickets;
const mainDiv = document.querySelector('#flight-details');

ticket.forEach((item,index)=> {
let newTicket = document.createElement('div');
newTicket.innerText = item.id + ' : ' + item.seat + ' - ' + item.fullName + ' - ' + item.registrationTime;
mainDiv.append(newTicket)
console.log(newTicket);
});

}
console.log(flightDetails('BH118'));