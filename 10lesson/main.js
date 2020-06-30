const API_KEY = 'FxnDLKI3So5xqmdmyP8JXGS51CtsJVPd';

const getGif = (value) => {
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${value}&api_key=${API_KEY}`,{
        cache: "force-cache"
    }).then(result => {
        if(!result.ok) {
            throw new Error('Ошибка')
        }
        return result.json();
    }).then(result =>{
        if(result.meta.status !== 200) {
            throw new Error(result.status)
        }
        let cache = {[value] : result.data};
        return cache;
    }).then(cache =>{
        let div = document.querySelector('.img');
        Object.keys(cache).map((key,value)=>{
            const h2 = document.createElement('h2');
            h2.textContent = Object.keys(cache);
            div.append(h2);
            cache[key].forEach((item,value)=>{
                let element = document.createElement('div');
                element.textContent = item.url;
                div.append(element);
            });
            const hr = document.createElement('hr');
            div.append(hr)
        });
    })
};

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
        setTimeout( () => f(inputs.value), 1000);
    });
}
Input('input');

let f = debounce(getGif, 1000);
