'use strict';
const API_KEY = 'FxnDLKI3So5xqmdmyP8JXGS51CtsJVPd';
let input = document.querySelector('input');
function createCache(key, arr) {
    let array = [];
    array.push({[key]: arr});
    console.log(array)
}
const getGif = (value) => {
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${value}&api_key=${API_KEY}`).then(result => {
        if(!result.ok) {
            throw new Error(result.status)
        }
        return result.json();
    }).then(result =>{
        let cache = {[value] : result.data};
        return cache;
    }).then(cache =>{
        Object.keys(cache).map((key,value)=>{
            createCache(key, cache[key])
            // console.log(key, cache[key])
        });
        console.log(Object.keys(cache));

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
