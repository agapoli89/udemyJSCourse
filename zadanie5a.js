const input = document.getElementById('pass');
const div = document.querySelector('div');

const passwords = ["user", "Foksik", "Brandy"]; //zmienna przechowująca hasło
const messages = ["Have a nice day!", "Nice dog!", "Nice dog too!"];


input.addEventListener('input', (e) => {
    console.log(e.target.value);
    const text = e.target.value;
    div.textContent = "";

    passwords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index];
            e.target.value = ""; //hasło znika
        }
    })

});

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
});

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})