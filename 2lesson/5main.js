//5 задание
let glasnie = 'a,e,i,o,u,y',
	soglasnie = 'b,c,d,f,g,h,k,l,m,n,p,q,r,s,t,v,x,z'
let text = prompt('Введите текст');
let resGlas = 0;
let resSogl = 0;
for(let i = 0; i < text.length; i++){
	let sovpGlasnie = glasnie.indexOf(text[i]),
		sovpSoglasnie = soglasnie.indexOf(text[i]);
	if(sovpGlasnie != -1){
		resGlas += 1;
	}else if(sovpSoglasnie != -1){
		resSogl += 1
	}

}
	alert(`гласных - ${resGlas} | согласных - ${resSogl}`)

