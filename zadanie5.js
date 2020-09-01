const input = document.getElementById('pass');
const div = document.querySelector('div');

const password = "user"; //zmienna przechowująca hasło
const message = "Have a nice day!";

input.addEventListener('input', (e) => {
    // zdarzenie: keyup - podniesienie klawisza (też zadziała, z wyjątkiem sytuacji kiedy użytkownik nie wpisze hasła z klawiatury tylko będzie chciał je wkleić)
    console.log(e.target.value);

    if (e.target.value === password) {
        div.textContent = message;
    } else {
        div.textContent = "";
    }

});

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
});

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})

//UWAGA this na pierwszy rzut oka oznacza to samo co e.target i tak rzeczywiście jest gdy callback deklarujemy za pomocą słowa kluczowego function. Jeżeli posłużymy się funkcją strzałkową to this nie odniesie się w tym wypadku do inputa, a do obiektu globalnego window. Będzie to istotne na późniejszym etapie nauki