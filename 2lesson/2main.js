//2 задание
//Шестнадцатиричный код AAAAAAAABBCDDDDDD
const decode = '';
const id = '0fd95ab53a854bdff';
const a = id.substr(0,8);
const timestamp = parseInt(a,16);
const timestampBack = a.replace(timestamp, a.substr(0,8));

const b = id.substr(8,2);
const claster = parseInt(b,16);
const clasterBack = b.replace(claster, b.substr());

const c = id.substr(10,1);
const type = parseInt(c,16);
const typeBack = c.replace(type, c.substr());

const d = id.substr(10);
const user = parseInt(d,16);
const userBack = d.replace(type, d.substr(10));

const result = timestampBack + clasterBack + typeBack + userBack;
console.log(result);