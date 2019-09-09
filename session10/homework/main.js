const up = document.getElementById('button-up')
const down = document.getElementById('button-down')
const left = document.getElementById('button-left')
const right = document.getElementById('button-right')
const boxElement = document.getElementById('box')

const box = {
    top: 0,
    left: 0,
    move: 10,
}

up.addEventListener('click',function moveToUp(){
    box.top -= box.move;
    boxElement.style.top = `${box.top}px`;
})
down.addEventListener('click',function moveToDown(){
    box.top += box.move;
    boxElement.style.top = `${box.top}px`;
})
left.addEventListener('click',function moveToLeft(){
    box.left -= box.move;
    boxElement.style.left = `${box.left}px`;
})
right.addEventListener('click',function moveToRight(){
    box.left += box.move;
    boxElement.style.left = `${box.left}px`;
})


