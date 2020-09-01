const input = document.querySelector('input');
const div = document.querySelector('div');
const passwords = ['jeDeN', 'Dwa'];
const messages = ['Super!', 'Działa!'];

/* const showMessage = (e) => {
    const text = e.target.value;
    const textToCheck = text.toLowerCase();
    console.log(textToCheck);
    div.textContent = "";

    passwords.forEach((password, index) => {

        if (textToCheck === password.toLowerCase()) {
            div.textContent = messages[index];
            e.target.value = "";
        }
    });
} */

//lub
passwords.forEach((password, i) => {
    passwords[i] = password.toLowerCase();
});

const showMessage = e => {
    const input = e.target.value.toLowerCase();
    div.textContent = "";
    passwords.forEach((password, i) => {
        if (password === input) {
            div.textContent = messages[i]
            e.target.value = '';
        }
    })
};

input.addEventListener('input', showMessage);

//lub



const blackInput = input.addEventListener('focus', () => {
    input.classList.add('active')
});

const whiteInput = input.addEventListener('blur', () => {
    input.classList.remove('active')
});