//2 задание
//Шестнадцатиричный код AAAAAAAABBCDDDDDD
let decode = '';
const id = '0fd95ab53a854bdff';
const a = id.substr(0,8);
const timestamp = parseInt(a,16);

const b = id.substr(8,2);
const claster = parseInt(b,16);

const c = id.substr(10,1);
const type = parseInt(c,16);

const d = id.substr(10);
const user = parseInt(d,16);

decode = timestamp + claster + type + user;
const timestampBack = timestamp.toString(16);
const clasterBack = claster.toString(16);
const typeBack = type.toString(16);
const userBack = user.toString(16);

console.log(timestampBack + clasterBack + typeBack + userBack);