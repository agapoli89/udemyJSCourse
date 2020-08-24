let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement('button');
    btn.textContent = "Dodaj 10 elementów listy";
    document.body.appendChild(btn);
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    ul.style.listStyle = "none";

    //przycisk resetu:
    const resetBtn = document.createElement('button');
    resetBtn.textContent = "Resetuj";
    resetBtn.style.display = 'none';
    document.body.appendChild(resetBtn);

    btn.addEventListener('click', createLiElements);
    resetBtn.addEventListener('click', resetLiElements);
}

const createLiElements = () => {

    const ul = document.querySelector('ul');

    resetBtn = document.querySelectorAll('button');
    resetBtn[1].style.display = 'block';

    for (let i = 0; i < 10; i++) {
        li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `Element nr ${orderElement++}`;
        li.style.fontSize = `${size++}px`
    }
}

const resetLiElements = () => {
    document.querySelector('ul').innerHTML = "";
    orderElement = 1;
    size = 10;

    resetBtn = document.querySelectorAll('button');
    resetBtn[1].style.display = 'none';
}

init()