const API_KEY = 'FxnDLKI3So5xqmdmyP8JXGS51CtsJVPd';

const getGif = (text) => {
    let cache = {};
    if(cache[text]){
        createElement(cache[text], text);
    }else{
        return fetch(`http://api.giphy.com/v1/gifs/search?q=${text}&api_key=${API_KEY}&limit=3`)
            .then(result => {
                if(!result.ok) {
                    throw new Error('Ошибка')
                }
                return result.json();
            }).then(result =>{
                if(result.meta.status !== 200) {
                    throw new Error(result.status)
                }
                cache[text] = result.data;
                console.log(result.data);
                console.log(cache[text]);
                createElement(result.data, text);
            })
    }
};

function createElement(obj,textInput) {
    let div = document.querySelector('.img');
    const h2 = document.createElement('h2');
    h2.textContent = textInput;
    div.append(h2);
    obj.forEach((item,value)=>{
        let element = document.createElement('div');
        element.textContent = item.url;
        div.append(element);
    });
    const hr = document.createElement('hr');
    div.append(hr)
}

function debounce(f, ms) {
    let isCooldown = false;
    return function() {
        if (isCooldown) return;
        f.apply(this, arguments);
        isCooldown = true;
        setTimeout(() => isCooldown = false, ms);
    };
}
function Input (input){
    let inputs = document.querySelector(input);
    inputs.addEventListener(input, ()=>{
        setTimeout( () => makeDelay(inputs.value), 1000);
    });
}
Input('input');

let makeDelay = debounce(getGif, 1000);

