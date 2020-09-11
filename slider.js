const slideList = [{
        img: "img/img1.jpg",
        text: "Pierwszy tekst",
    },
    {
        img: "img/img2.jpg",
        text: "Drugi tekst",
    },
    {
        img: "img/img3.jpg",
        text: "Trzeci tekst",
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];
const time = 5000;
let active = 0;

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) active = 0;
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}

const keyChangeSlide = (e) => {
    console.log('działa');
    switch (e.keyCode) {
        case 37:
            clearInterval(startChangeSlide);
            if (active === 0) {
                active = slideList.length - 1;
            } else {
                active--;
            }
            image.src = slideList[active].img;
            h1.textContent = slideList[active].text;
            changeDot();
            startChangeSlide = setInterval(changeSlide, time);
            break;
        case 39:
            clearInterval(startChangeSlide);
            if (active === slideList.length - 1) {
                active = 0;
            } else {
                active++;
            }
            image.src = slideList[active].img;
            h1.textContent = slideList[active].text;
            changeDot();
            startChangeSlide = setInterval(changeSlide, time);
            break;
        default:
            alert('Aby przewinąć slajd naciśnij którąś ze strzałek: <- lub ->');
    }
}

let startChangeSlide = setInterval(changeSlide, time);

document.addEventListener('keydown', keyChangeSlide);