const h1 = document.querySelector('h1');

document.body.addEventListener('mousemove', function (e) {
    //console.log(e.clientX, e.clientY); //określa położenie myszki względem okna przeglądarki
    h1.textContent = `${e.clientX}, ${e.clientY}`;

    //console.log(e.pageX, e.pageY); //określa położenie myszki względem strony/dokumentu (czyli jeżeli mamy zeskrolowaną stronę w dół, to uwzględniona zostanie również ta zeskrolowana odległość)

    //console.log(e.screenX, e.screenY); //określa położenie myszki względem ekranu


    //-------------------------------------------//
    //colory zmieniają się w zależności od położenia kursora

    //PRZYKŁAD 1 
    //document.body.style.backgroundColor = `rgb(${e.clientX}, ${e.clientY}, ${100})`;
    //document.body.style.backgroundColor = 'rgb(' + e.clientX + ',' + e.clientY + ',' + 100 + ')'; - przez konkatenację


    //PRZYKŁAD 2 
    const x = e.clientX // położenie kursora w osi x (e.clientX)
    const y = e.clientY // położenie kursora w osi y (e.clientY)
    const maxX = innerWidth // szerokość okna przeglądarki, czyli maksymalna wartość x
    const maxY = innerHeight // wysokość okna przeglądarki, czyli maksymalna wartość y

    //pobieramy minutę, w zależności od tego która będzie minuta zmieniać się będzie blue w rgb
    const date = new Date();
    const minute = date.getMinutes() + 1;

    // PRZYKŁAD 2a
    /* const red = x * 255 / maxX;
    const green = y * 255 / maxY;
    const blue = minute * 255 / 60;

    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`; */

    // PRZYKŁAD 2b
    const red = x / maxX * 100;
    const green = y / maxY * 100;
    const blue = minute / 60 * 100;

    document.body.style.backgroundColor = `rgb(${red}%,${green}%,${blue}%)`;
})