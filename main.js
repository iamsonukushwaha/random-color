//variables
let color = "#";
const colors = [
    0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'
]
const btn = document.getElementById('btn');
const bodyBackground = document.getElementById('body');
const value = document.querySelector('.value');
//logic

btn.addEventListener('click',getColor);

getColor();

function getColor() {
    color = "#";
    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * colors.length);

        color += colors[random];
    }
    bodyBackground.style.backgroundColor = color;
    value.innerHTML = color;
}

