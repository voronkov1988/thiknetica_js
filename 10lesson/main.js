const API_KEY = 'FxnDLKI3So5xqmdmyP8JXGS51CtsJVPd';
let input = document.querySelector('input');
const getGif = (value) => {
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${value}&api_key=${API_KEY}`).then(result => {
        if(!result.ok) {
            throw new Error(result.status)
        }
        return result.json();
    }).then(result =>{
        let cache = {[value] : result.data};
        console.log(value)
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
                console.log(item.url)
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
input.addEventListener('input', ()=>{
    setTimeout( () => f(input.value), 1000);
});

let f = debounce(getGif, 1000);
