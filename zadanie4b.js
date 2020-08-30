const squere = document.querySelector('div');
let squereX = 150;
let squereY = 50;
squere.style.left = `${squereX}px`;
squere.style.top = `${squereY}px`;

let drawActive = false;

let insertSquereX;
let insertSquereY;

squere.addEventListener('mousedown', (e) => {
    squere.style.backgroundColor = "grey";
    drawActive = !drawActive;

    insertSquereX = e.offsetX;
    insertSquereY = e.offsetY;
});

squere.addEventListener('mousemove', (e) => {
    if (drawActive) {
        squereX = e.clientX - insertSquereX;
        squereY = e.clientY - insertSquereY;
        squere.style.left = `${squereX}px`;
        squere.style.top = `${squereY}px`;
    }
})

squere.addEventListener('mouseup', () => {
    squere.style.backgroundColor = "black";
    drawActive = !drawActive;
})