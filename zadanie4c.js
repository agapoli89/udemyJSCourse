let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

const changeColor = (e) => {
    console.log(e.keyCode);
    // 38 - strzałka do góry
    // 40 - strzałka w dół

    //wersja 1
    /* if (e.keyCode == 40 && red > 0) {
        red--;
        green--;
        blue--;
        document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    } else if (e.keyCode == 38 && red < 255) {
        red++;
        green++;
        blue++;
        document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    } else {
        console.log('else');
        const h1 = document.createElement('h1');
        document.body.appendChild(h1);
        h1.innerHTML = "Wciśniej strzałkę do góry lub strzałkę w dół =)"; */

    //wersja 2
    switch (e.keyCode) {
        case 38:
            document.body.style.backgroundColor = `rgb(${red < 255 ? red++ : red}, ${green < 255 ? green++ : green}, ${blue < 255 ? blue++ : blue})`;
            break;
        case 40:
            document.body.style.backgroundColor = `rgb(${red > 0 ? red-- : red}, ${green > 0 ? green-- : green}, ${blue > 0 ? blue-- : blue})`;
            break;
        default:
            const h1 = document.createElement('h1');
            document.body.appendChild(h1);
            h1.innerHTML = "Wciśniej strzałkę do góry lub strzałkę w dół =)";
    }
}

window.addEventListener("keydown", changeColor);