const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs ={
    startBtn: document.querySelector(' button[data-action="start"]'),
    stopBtn: document.querySelector(' button[data-action="stop"]'),
    bodyBg: document.querySelector('body')
};

let intervalId;

document.body.addEventListener('click', buttonAction);

function buttonAction(evt) {
    if (evt.target === refs.startBtn) {
        intervalId = setInterval(changeBg, 1000);
        refs.startBtn.disabled = 'true';
    } else {
        refs.startBtn.disabled = false;
        clearInterval(intervalId);  
    }
}

function changeBg() {
document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];    
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



