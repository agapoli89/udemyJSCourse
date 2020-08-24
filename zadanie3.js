const startBtn = document.querySelector('button');
const liItems = [...document.querySelectorAll('li')];
let liFontSize = 10;

const showLi = function () {

    for (let i = 0; i < liItems.length; i++) {
        liItems[i].style.display = 'block';
        liItems[i].style.fontSize = liFontSize + 'px';
    }

    //lub
    /* liItems.forEach(function (liItem) {
        liItem.style.display = 'block';
        liItem.style.fontSize = liFontSize + 'px';
    }); */

    liFontSize++;
};

startBtn.addEventListener('click', showLi);