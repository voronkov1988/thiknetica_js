class HtmlElement {
    constructor() {
        this._target;
        this._template;
        this._styles;
        this.variables;
        this._textContent;
    }
    set target(dom) {
        if (!dom)
            throw new Error('нужно ввести дом элемент');
        this._target = document.querySelector(dom);

    }
    get target() {

        return this._target;
    }
    set styles(data) {
        this._styles = data;
        this.updateStyle(data);
    }
    set template(el) {
        this._template = document.createElement(el);
    }
    _render() {
        this._target.append(this._template);
    }
    render() {
        this._render();
    }
    _unrender() {
        this._template.remove();
    }
    unrender() {
        this._unrender();
    }
    updateStyle(stylesheet) {
        this._template.style = stylesheet;
    }
    updateText(data) {
        this.textContent = data;
        let variable = this.variables;
        variable.prototype = Array;
        //получаю строку названия свойства как в обьекте variables
        let template = data.split('').slice(2,-2).join(''); // == qwerty
        console.log(template);
        //можно ли подставить значение template которое = 'qwerty'
        this._template.textContent = variable.qwerty;
    }
}

class Div extends HtmlElement {
    constructor() {
        super();
    }
    set onClick(f) {
        this._template.addEventListener('click', f)
    }
}
class Input extends HtmlElement {
    constructor() {
        super();
    }
    set onInput(f) {
        this._template.addEventListener('input', f)
    }
    set onFocus(f) {
        this._template.addEventListener('focus', f)
    }
}

const one = new Div();

one.target = 'h1';
one.template = 'div';

one.styles = 'color: red; font-size:2em';
one.variables = {
    output: 'Some text',
    qwerty: 'some'
}


one.render();
one.updateText('{{qwerty}}');
one.onClick = () => console.log('onclick');
console.log(one);
// one.unrender();

const two = new Input();
two.target = 'h1';
two.template = 'input';

two.variables = {
    output2: 'Some text2'
}
two.updateText('qwerty');
two.styles = 'color: red; font-size:2em';


two.render();
two.onInput = () => console.log('onInput');
two.onFocus = () => console.log('onFocus');
// two.unrender();
console.log(two);
