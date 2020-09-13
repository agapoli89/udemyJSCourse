const mainBtn = document.querySelector('.main');
const resetBtn = document.querySelector('.reset');
let miliSec = 0;
let sec = 0;

const start = () => {
    mainBtn.removeEventListener('click', start);
    mainBtn.textContent = "Pauza";

    const stopwatch = setInterval(() => {
        miliSec++;
        if (miliSec === 100) {
            miliSec = 0;
            sec++;
        }
        document.querySelector('.time div').textContent = `${sec}.${miliSec < 10 ? '0' + miliSec : miliSec}`;
    }, 10);

    const pause = () => {
        mainBtn.removeEventListener('click', pause);
        mainBtn.textContent = "Start";
        clearInterval(stopwatch);

        mainBtn.addEventListener('click', start);
    }

    const reset = () => {
        sec = 0;
        miliSec = 0;
        pause();
        document.querySelector('.time div').textContent = '---';
    }

    mainBtn.addEventListener('click', pause);
    resetBtn.addEventListener('click', reset);
}

mainBtn.addEventListener('click', start);