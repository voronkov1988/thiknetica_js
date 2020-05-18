//2 задание
//Шестнадцатиричный код AAAAAAAABBCDDDDDD
const id = '0fd95ab53a854bdff';
const a = id.substr(0,8);
const timestamp = parseInt(a,16);

const b = id.substr(8,2);
const claster = parseInt(b,16);

const c = id.substr(10,1);
const type = parseInt(c,16);

const d = id.substr(10);
const user = parseInt(d,16);

const timestampBack = timestamp.toString(16).padStart(8,'0'),
	clasterBack = claster.toString(16).padStart(2,'0'),
	typeBack = type.toString(16).padStart(1,'0'),
	userBack = user.toString(16).padStart(6,'0')

console.log(`${timestampBack}${clasterBack}${typeBack}${userBack}`)

