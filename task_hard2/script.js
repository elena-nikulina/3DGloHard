const animationBlock = document.querySelector('#animation-block');
const startBtn = document.querySelector('.start-animation');
const resetBtn = document.querySelector('.reset-animation');
let isAnimate = false;

let count = 0;
let idInterval;

startBtn.addEventListener('click', () => {
    isAnimate = !isAnimate;
    if (isAnimate) {
        startBtn.textContent = 'Пауза';

        step();
    } else {
        startBtn.textContent = 'Старт';
    }
    
});

resetBtn.addEventListener('click', () => {
    animationBlock.style.left = 0;
    idInterval = requestAnimationFrame(step);
});

const step = () => {
    count++;
    idInterval = requestAnimationFrame(step);

    if (isAnimate && count < 50) {

        animationBlock.style.left = 10*count + 'px';
    } else {
        cancelAnimationFrame(idInterval);
    }
    
}



