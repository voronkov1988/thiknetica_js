class HtmlElement {
    constructor() {
        this._target;
        this._template;
        this._styles;
        this._textContent;
    }
    set target(dom){
    	if(!dom)
    		throw new Error('нужно ввести дом элемент');
    	this._target = document.querySelector(dom);
    	
    }
    get target(){
    	return this._target;
    }
    set styles(data){
    	this._styles = data;
    	this.updateStyle(data);
    }
    set template(el){
    	this._template = document.createElement(el);
    	console.log(this._template);
    	
    }
    get template(){
    	console.log(this._template);
    }
    _render(){
    	this._target.append(this._template);
    }
    render(){
    	this._render();
    }
    _unrender(){
    	this._template.remove();
    }
    unrender(){
    	this._unrender();
    }
    updateStyle(stylesheet){
    	this._template.style = stylesheet;
    }
    updateText(data){
    	this.textContent = data;
    	if(this.textContent){
    		this._template.textContent += this.textContent;
    	}
    }
}

class Div extends HtmlElement{
	constructor(){
		super();
	}
	set onClick(f){
		this._template.addEventListener('click', f)
	}
}
class Input extends HtmlElement{
	constructor (){
		super();
	}
	set onInput(f){
		this._template.addEventListener('input', f)
	}
	set onFocus (f){
		this._template.addEventListener('focus', f)
	}
}

const one = new Div();

one.target = 'h1';
one.template = 'div';
one.styles = 'color: red; font-size:2em';
one.updateText('qwerty');
one.updateText(' 123');
one.render();
one.onClick = () => console.log('onclick');
// one.unrender();

const two = new Input();
two.target = 'h1';
two.template = 'input';
two.styles = 'color: red; font-size:2em';
two.updateText('qwerty');
two.updateText(' 123');
two.render();
two.onInput = () => console.log('onInput');
two.onFocus = () => console.log('onFocus');
// two.unrender();
console.log(two);


// class HtmlElement {
//     constructor(target) {
//         this._target = document.querySelector(target); //куда вставлять
//         this.template; //создаваемый элемент
//         this.stili = {};
//     }

//     set styles(stylesheet){
//     	console.log(stylesheet);
//     	this.stili = stylesheet;
//     	console.log(this.stili);
//     	this.template.style = this.stili
//     }
//     get styles(){
//     	return this.stili;
//     }

//     createElement(el) {
//     	console.log(this._target);
//         let element = document.createElement(el);
//         this.template = element;
//         this._target.append(element)
//     }
//     createTextInElement(text){
//     	this.template.textContent = text;
//     }
// }

// const one = new HtmlElement('ul');
// one.createElement('li');
// one.createTextInElement('dfdgfg');
// one.styles = {color:'red',fontSize:'3em'};
// one.target = 'a';
// console.log(one);
