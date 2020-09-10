// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['Dzień dobry!', 'Fajnie, że jesteś :)', 'Życzę miłego dnia!!'];
let index = 0;
let textIndex = -3;

// Implementacja
const addLetter = () => {
    if (textIndex >= 0) {
        if (textIndex < txt[index].length) {
            spnText.textContent += txt[index][textIndex];
            textIndex++;
            setTimeout(addLetter, 400);

        } else {
            index++;
            if (index == txt.length) {
                return;
            } else {
                return setTimeout(() => {
                    textIndex = -3;
                    spnText.textContent = '';
                    addLetter();
                }, 1500);
            }
        }
    } else {
        textIndex++;
        console.log(textIndex);

        setTimeout(addLetter, 400);
    }
}

addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);