//1. Доработать графический редактор, начатый на занятии
//    Увеличить поле
//    Добавить возможность выбора цвета 
let color1 = [
    ["белый", "#fff7f7"],
    ["серно-желтый", "#e7be00"],
    ["желтый", "#ffb200"],
    ["цинковый желтый", "#ffc718"],
    ["золотисто-желтый", "#ffa200"],
    ["желтая охра", "#e0c537"],
    ["желто-оранжевый", "#ff8a00"],
    ["оранжевый", "#ff5500"],
    ["красно-рыжий", "#ff2512"],
    ["красно-коралловый", "#ff2246"],
    ["светло-красный", "#f73400"],
    ["ярко-красный", "#ff0f00"],
    ["красно-алый", "#ef1400"],
    ["красный", "#ce0000"],
    ["вишнево-красный", "#b50018"],
    ["темно-красный", "#840021"],
    ["палево-розовый", "#ffb1a1"],
    ["бледно-розовый", "#ff71c1"],
    ["малиновый", "#c60063"],
    ["бургунди", "#7b0042"],
    // ["фиолетовый", "#520063"],
    // ["бледно-фиолетовый", "#521a86"],
    // ["лиловый", "#42004a"],
    // ["пастельно-голубой", "#449ec0"],
    // ["голубой", "#008ac0"],
    // ["лазурный", "#00619c"],
    // ["генцианово-синий", "#0062aa"],
    // ["серо-синий", "#006b96"],
    // ["средне-синий", "#0014a5"],
    // ["интенсивно-синий", "#002c63"],
    // ["королевский синий", "#310073"],
    // ["кобальтовый темно-синий", "#52007b"],
    // ["глубокий синий", "#210073"],
    // ["темно-бирюзовый", "#008c9e"],
    // ["бирюзово-синий", "#00b2a5"],
    // ["бирюзовый", "#00ba94"],
    // ["светло-зеленый", "#00b110"],
    // ["липово-зеленый", "#00cb21"],
    // ["средне-зеленый", "#00b673"],
    // ["ярко-зеленый", "#00b614"],
    // ["сине-зеленый", "#197c5c"],
    // ["травяной зеленый", "#00a252"],
    // ["изумрудно-зеленый", "#00964a"],
    // ["темно-зеленый", "#004016"],
    // ["черный", "#000000"],
    // ["серый", "#8c8e84"],
    // ["ярко-серый", "#9c9e94"],
    // ["светло-серый", "#afafaf"],
    // ["цвет слоновой кости", "#eadca9"],
    // ["кофейно-коричневый", "#632810"],
    // ["светло-коричневый", "#de9a6b"],
    // ["бежево-коричневый", "#ffc384"],
    // ["серебристый", "#d7d7d7"],
    // ["золотистый", "#d7d7d7"]
];
let tr = document.querySelector('tr');
let image = document.querySelector('table');
let color = document.querySelector('.color-block')
let allTr;

for (let i = 1; i < 50; i++) {
    allTr = tr.cloneNode(true);
    image.append(allTr)
}

color1.forEach((item, palitra) => {
    let divColor = document.createElement('div');
    divColor.classList.add('palitra');
    divColor.style.width = '100px';
    divColor.style.marginLeft = '5px';
    divColor.style.heigth = '50px';
    divColor.style.backgroundColor = item[1];
    divColor.innerText = item[0];
    color.append(divColor);
})

color.addEventListener('click', (e) => {
    let checkColor = e.target.style.backgroundColor;
    makePaper(checkColor)
});

function makePaper(color) {
    image.addEventListener('click', (e) => {
        if (e.target.closest('td')) {
            e.target.style.backgroundColor = color;
        }
    });
    image.addEventListener('dblclick', (e) =>{
        if (e.target.closest('td')) {
            e.target.style.backgroundColor = 'white';
        }
    })
    console.log(color)
}