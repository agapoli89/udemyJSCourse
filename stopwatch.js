const mainBtn = document.querySelector('.main');
const resetBtn = document.querySelector('.reset');
let miliSec = 0;
let sec = 0;

const count = () => {
    console.log('start');
    setInterval(() => {
        miliSec++;
        if (miliSec === 100) {
            miliSec = 0;
            sec++;
        }
        document.querySelector('.time div').textContent = `${sec}.${miliSec < 10 ? '0' + miliSec : miliSec}`;
    }, 10);
}

mainBtn.addEventListener('click', count);